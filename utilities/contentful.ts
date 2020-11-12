import { Category, Collection, MenuVersion } from './contentful-types';

const TMS_CONTENTFUL_SPACE_ID = '8fhpgddd51q7';

async function fetchGraphQL<T>(query): Promise<{ data: T }> {
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

export const getFullMenu = async (): Promise<Category[]> => {
  const fullMenu = await fetchGraphQL<{ menuVersionCollection: Collection<MenuVersion> }>(`
    query {
      menuVersionCollection(where: { type: "Full menu"}, limit: 1) {
        items {
          type
          categoriesCollection {
            items {
              title
              menuItemsCollection {
                items {
                  title
                  price
                }
              }
            }
          }
        }
      }
    }
  `);
  return fullMenu.data.menuVersionCollection.items[0].categoriesCollection.items;
};
