export interface Option extends BaseItem {
  title: string;
  maximum?: number;
  minimum?: number;
  freeOptionItemCollection: Collection<MenuItem>;
  pricedOptionItemsCollection: Collection<MenuItem>;
}

// export interface Image {
//   title: string;
//   file: {
//     url: string;
//     details: {
//       size: number;
//       image: {
//         width: number;
//         height: number;
//       };
//     };
//     fileName: string;
//     contentType: string;
//   };
// }

export interface MenuItem extends BaseItem {
  title: string;
  price: number;
  description: string;
  image: { url: string } | null;
  submitImageToUber: boolean;
  temperature: string[];
  optionsCollection?: Collection<Option>;
}

export interface Category extends BaseItem {
  title: string;
  menuItemsCollection: Collection<MenuItem>;
}

export interface MenuVersion extends BaseItem {
  type: string;
  categoriesCollection: Collection<Category>;
}

export interface Collection<T> {
  items: T[];
  total: number;
}

export interface BaseItem {
  sys: {
    id: string;
  };
}
