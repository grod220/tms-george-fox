import SomeMeatball from './images/some-meatball.png';
import { StaticImageData } from 'next/image';

export interface MeatballData {
  image: StaticImageData;
  name: string;
  glutenFree: boolean;
  vegan: boolean;
  vegetarian: boolean;
}

export const MeatballDisplayData: MeatballData[] = [
  {
    image: SomeMeatball,
    name: "Nonna's Traditional Italian",
    glutenFree: false,
    vegan: false,
    vegetarian: false,
  },
  {
    image: SomeMeatball,
    name: 'Chicken Buffalo Bleu',
    glutenFree: true,
    vegan: false,
    vegetarian: false,
  },
  {
    image: SomeMeatball,
    name: 'Chicken Marsala',
    glutenFree: true,
    vegan: false,
    vegetarian: false,
  },
  {
    image: SomeMeatball,
    name: 'Chicken Parmigiana',
    glutenFree: true,
    vegan: false,
    vegetarian: false,
  },
  {
    image: SomeMeatball,
    name: 'Veggie',
    glutenFree: true,
    vegan: true,
    vegetarian: true,
  },
  {
    image: SomeMeatball,
    name: 'Spicy black bean yucca',
    glutenFree: true,
    vegan: true,
    vegetarian: true,
  },
  {
    image: SomeMeatball,
    name: 'Spicy Pork',
    glutenFree: false,
    vegan: false,
    vegetarian: false,
  },
  {
    image: SomeMeatball,
    name: 'Sausage Pepper & Onions',
    glutenFree: true,
    vegan: false,
    vegetarian: false,
  },
  {
    image: SomeMeatball,
    name: 'Polenta',
    glutenFree: true,
    vegan: false,
    vegetarian: true,
  },
  {
    image: SomeMeatball,
    name: 'Sausage',
    glutenFree: true,
    vegan: false,
    vegetarian: true,
  },
  {
    image: SomeMeatball,
    name: 'Eggplant Zucchini Quinoa',
    glutenFree: true,
    vegan: true,
    vegetarian: true,
  },
  {
    image: SomeMeatball,
    name: 'Mac & Cheese',
    glutenFree: false,
    vegan: false,
    vegetarian: true,
  },
  {
    image: SomeMeatball,
    name: 'Crab',
    glutenFree: false,
    vegan: false,
    vegetarian: false,
  },
  {
    image: SomeMeatball,
    name: 'Gator',
    glutenFree: false,
    vegan: false,
    vegetarian: false,
  },
  {
    image: SomeMeatball,
    name: 'Impossible Barbecue',
    glutenFree: true,
    vegan: true,
    vegetarian: true,
  },
];
