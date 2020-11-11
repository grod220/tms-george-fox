export interface Choice {
  name: string;
  selection?: boolean;
  gf?: boolean;
  vegan?: boolean;
  vegetarian?: boolean;
  extra?: number;
  addition?: boolean;
}

// Deprecated in favor of typed ItemStore

// export type DishChoices = Record<string, Choice[]>;

// interface DishItem {
//   dishName: string;
//   basePrice: number;
//   choices: DishChoices;
//   selectionsRequired: number;
//   total: number;
//   additionsRequired: Record<string, number>;
// }

interface ItemOption {
  name: string;
  choices: Choice[];
  minimum?: number;
  maximum?: number;
}

interface MenuItem {
  name: string;
  price: number;
  description?: string;
  image?: string;
  vegImage?: string;
  vegan?: boolean;
  vegetarian?: boolean;
  gf?: boolean;
  options?: ItemOption[];
  isPromo?: boolean;
}

export interface Category {
  category: string;
  items: MenuItem[];
}
