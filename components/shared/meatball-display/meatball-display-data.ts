import { StaticImageData } from 'next/image';

import Blackbean from './images/blackbean.jpg';
import ChickenParm from './images/chicken-parm.jpg';
import Buffalo from './images/buffalo.jpg';
import Crab from './images/crab.jpg';
import Eggplant from './images/eggplant.jpg';
import Impossible from './images/impossible.jpg';
import MacAndCheese from './images/mac-and-cheese.jpg';
import Marsala from './images/marsala.jpg';
import NonnasTraditional from './images/nonnas.jpg';
import Polenta from './images/polenta.jpg';
import SausagePepperOnion from './images/sausage-pepper-onion.jpg';
import Sausage from './images/sausage.jpg';
import SpicyPork from './images/spicypork.jpg';
import Veggie from './images/veggie.jpg';

export interface MeatballData {
  image: StaticImageData;
  name: string;
  glutenFree: boolean;
  vegan: boolean;
  vegetarian: boolean;
}

export const MeatballDisplayData: MeatballData[] = [
  {
    image: NonnasTraditional,
    name: "Nonna's Traditional Italian",
    glutenFree: false,
    vegan: false,
    vegetarian: false,
  },
  {
    image: Buffalo,
    name: 'Chicken Buffalo Bleu',
    glutenFree: true,
    vegan: false,
    vegetarian: false,
  },
  {
    image: Marsala,
    name: 'Chicken Marsala',
    glutenFree: true,
    vegan: false,
    vegetarian: false,
  },
  {
    image: ChickenParm,
    name: 'Chicken Parmigiana',
    glutenFree: true,
    vegan: false,
    vegetarian: false,
  },
  {
    image: Veggie,
    name: 'Veggie',
    glutenFree: true,
    vegan: true,
    vegetarian: true,
  },
  {
    image: Blackbean,
    name: 'Spicy black bean yucca',
    glutenFree: true,
    vegan: true,
    vegetarian: true,
  },
  {
    image: SpicyPork,
    name: 'Spicy Pork',
    glutenFree: false,
    vegan: false,
    vegetarian: false,
  },
  {
    image: SausagePepperOnion,
    name: 'Sausage Pepper & Onions',
    glutenFree: true,
    vegan: false,
    vegetarian: false,
  },
  {
    image: Polenta,
    name: 'Polenta',
    glutenFree: true,
    vegan: false,
    vegetarian: true,
  },
  {
    image: Sausage,
    name: 'Sausage',
    glutenFree: true,
    vegan: false,
    vegetarian: false,
  },
  {
    image: Eggplant,
    name: 'Eggplant Zucchini Quinoa',
    glutenFree: true,
    vegan: true,
    vegetarian: true,
  },
  {
    image: MacAndCheese,
    name: 'Mac & Cheese',
    glutenFree: false,
    vegan: false,
    vegetarian: true,
  },
  {
    image: Crab,
    name: 'Crab',
    glutenFree: false,
    vegan: false,
    vegetarian: false,
  },
  {
    image: Impossible,
    name: 'Impossible Barbecue',
    glutenFree: true,
    vegan: true,
    vegetarian: true,
  },
];
