// temporary until this moves to contentful

import { set, subHours } from 'date-fns';

export interface BusinessOrderOption {
  buildingName: string;
  addr: string;
  deliveryTimes: Date[];
}

const businessOrderConfig: BusinessOrderOption[] = [
  {
    buildingName: 'Wells Fargo',
    addr: '12842 N. Orange Blossom Trail',
    deliveryTimes: [
      set(new Date(), { year: 2022, month: 8, date: 4, hours: 16, minutes: 0 }),
      set(new Date(), { year: 2022, month: 11, date: 8, hours: 16, minutes: 0 }),
      set(new Date(), { year: 2022, month: 10, date: 12, hours: 16, minutes: 0 }),
      set(new Date(), { year: 2022, month: 1, date: 4, hours: 16, minutes: 0 }),
    ],
  },
  {
    buildingName: 'Orange County Center',
    addr: '5420 Trail East Park',
    deliveryTimes: [
      set(new Date(), { year: 2022, month: 11, date: 18, hours: 16, minutes: 0 }),
      set(new Date(), { year: 2022, month: 9, date: 1, hours: 16, minutes: 0 }),
    ],
  },
  {
    buildingName: 'No Mans Land',
    addr: '3953 Yort Road',
    deliveryTimes: [set(new Date(), { year: 2021, month: 11, date: 18, hours: 16, minutes: 0 })],
  },
  {
    buildingName: 'Florida Hospital',
    addr: '1 Apple Circle',
    deliveryTimes: [set(new Date(), { year: 2022, month: 9, date: 1, hours: 16, minutes: 0 })],
  },
];

export const getBusinessOrderConfig = () =>
  businessOrderConfig
    .map((item) => {
      return {
        ...item,
        deliveryTimes: item.deliveryTimes
          .filter((date) => {
            const latestCanOrder = subHours(date, 52);
            return new Date() < latestCanOrder;
          })
          .sort(),
      };
    })
    .filter((item) => item.deliveryTimes.length);
