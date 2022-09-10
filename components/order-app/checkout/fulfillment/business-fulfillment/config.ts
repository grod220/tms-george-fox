// temporary until this moves to contentful

import { set } from 'date-fns';

interface BusinessOrder {
  buildingName: string;
  addr: string;
  deliveryTimes: Date[];
}

type BusinessOrderConfig = BusinessOrder[];

export const businessOrderConfig: BusinessOrderConfig = [
  {
    buildingName: 'Wells Fargo',
    addr: '12842 N. Orange Blossom Trail',
    deliveryTimes: [
      set(new Date(), { year: 2022, month: 8, date: 4 }),
      set(new Date(), { year: 2022, month: 11, date: 8 }),
    ],
  },
  {
    buildingName: 'Orange County Center',
    addr: '5420 Trail East Park',
    deliveryTimes: [
      set(new Date(), { year: 2022, month: 9, date: 1 }),
      set(new Date(), { year: 2022, month: 12, date: 18 }),
    ],
  },
  {
    buildingName: 'Florida Hospital',
    addr: '1 Apple Circle',
    deliveryTimes: [set(new Date(), { year: 2022, month: 9, date: 1 })],
  },
];
