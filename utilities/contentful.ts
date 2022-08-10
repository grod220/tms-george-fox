import { BaseItem, Category, Collection, MenuItem, MenuVersion, Option } from './contentful-types';

const TMS_CONTENTFUL_SPACE_ID = '8fhpgddd51q7';

async function fetchGraphQL<T>(query: string): Promise<{ data: T | undefined }> {
  const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${TMS_CONTENTFUL_SPACE_ID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.CONTENTFUL_SECRET}`,
    },
    body: JSON.stringify({ query }),
  });
  return response.json();
}

export const getFullMenuPreview = async (): Promise<Category[]> => {
  const fullMenu = await fetchGraphQL<{ menuVersionCollection: Collection<MenuVersion> }>(`
    query {
      menuVersionCollection(where: { type: "Full menu"}, limit: 1) {
        items {
          type
          categoriesCollection(limit:20) {
            items {
              title
              menuItemsCollection {
                items {
                  title
                  price
                  image {
                    url
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  return fullMenu.data?.menuVersionCollection.items[0].categoriesCollection.items ?? [];
};

const getMenuItemsWithIdsOnly = async (topQuery: string): Promise<MenuVersion[]> => {
  const fullMenu = await fetchGraphQL<{ menuVersionCollection: Collection<MenuVersion> }>(`
    query {
      ${topQuery} {
        total
        items {
          type
            categoriesCollection(limit: 15) {
            total
            items {
              title
              menuItemsCollection {
                total
                items {
                  title
                  sys {
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  return fullMenu.data?.menuVersionCollection.items ?? [];
};

export const getNormalItemsWithIdsOnly = async (): Promise<MenuVersion[]> => {
  return getMenuItemsWithIdsOnly(`
    menuVersionCollection(
      where: {
        OR: [
          { type: "Full menu" }
          { type: "Vegetarian" }
          { type: "Vegan" }
          { type: "Gluten Free #meat" }
        ]
      },
      limit: 4
    )
  `);
};

export const getCateringItemsWithIdsOnly = async (): Promise<MenuVersion[]> => {
  return getMenuItemsWithIdsOnly(`menuVersionCollection(where: { type: "Catering Menu" }, limit: 1)`);
};

const getMenuItems = async (skip: number): Promise<MenuItem[]> => {
  const dishCollection = await fetchGraphQL<{ dishCollection: Collection<MenuItem> }>(`
    query {
      dishCollection(skip: ${skip}) {
        items {
          sys {
            id
          }
          title
          price
          description
          temperature
          inStock
          image {
            url
            width
            height
          }
          optionsCollection {
            total
            items {
              sys {
                id
              }
            }
          }
        }
      }
    }
  `);
  return dishCollection.data?.dishCollection.items ?? [];
};

const getAllOptions = async (): Promise<Option[]> => {
  const optionsCollection = await fetchGraphQL<{ optionsCollection: Collection<Option> }>(`
    query {
      optionsCollection {
        total
        items {
          sys {
            id
           }
          title
          maximum
          minimum
          freeOptionItemCollection(limit: 50) {
            total
            items {
              ... on Dish {
                title
              }
              ... on OptionItem {
                title
              }
            }
          }
          pricedOptionItemsCollection(limit: 50) {
            total
            items {
              ... on Dish {
                title
                price
              }
              ... on OptionItem {
                title
                price
              }
            }
          }
        }
      }
    }
  `);
  return optionsCollection.data?.optionsCollection.items ?? [];
};

const createDictById = <T extends BaseItem>(arr: T[]) => {
  return arr.reduce((acc, curr) => {
    acc[curr.sys.id] = curr;
    return acc;
  }, {} as Record<string, T>);
};

export const getMenus = async (menuRetrievalFn: () => Promise<MenuVersion[]>): Promise<MenuVersion[]> => {
  const fullMenu = await menuRetrievalFn();
  const menuItemsDict = createDictById([
    ...(await getMenuItems(0)),
    ...(await getMenuItems(100)),
    ...(await getMenuItems(200)),
  ]);
  const optionsDict = createDictById(await getAllOptions());

  // insanity required due to the contentful complaining about the complexity of queries
  const fullMenuMerged: MenuVersion[] = fullMenu.map((menu) => ({
    ...menu,
    categoriesCollection: {
      ...menu.categoriesCollection,
      items: menu.categoriesCollection.items.map((category) => ({
        ...category,
        menuItemsCollection: {
          ...category.menuItemsCollection,
          items: category.menuItemsCollection.items.map((item) => ({
            ...item,
            ...menuItemsDict[item.sys.id],
            optionsCollection: {
              ...menuItemsDict[item.sys.id].optionsCollection,
              items: menuItemsDict[item.sys.id].optionsCollection
                ? menuItemsDict[item.sys.id].optionsCollection.items.map((option) => ({
                    ...option,
                    ...optionsDict[option.sys.id],
                  }))
                : [],
            },
          })),
        },
      })),
    },
  }));

  return fullMenuMerged;
};

export const getNormalMenus = async (): Promise<MenuVersion[]> => {
  return getMenus(getNormalItemsWithIdsOnly);
};

export const getCateringMenu = async (): Promise<MenuVersion[]> => {
  return getMenus(getCateringItemsWithIdsOnly);
};
