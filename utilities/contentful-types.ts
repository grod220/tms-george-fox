export interface Option {
  title: string;
  maximum: number;
  minimum: number;
}

export interface Image {
  title: string;
  file: {
    url: string;
    details: {
      size: number;
      image: {
        width: number;
        height: number;
      };
    };
    fileName: string;
    contentType: string;
  };
}

export interface MenuItem {
  title: string;
  price: number;
  // description: string;
  // image: Image;
  // submitImageToUber: boolean;
  // temperature: string[];
  // options: Option[];
}

export interface Category {
  title: string;
  menuItemsCollection: Collection<MenuItem>;
}

export interface MenuVersion {
  type: string;
  categoriesCollection: Collection<Category>;
}

export interface Collection<T> {
  items: T[];
}
