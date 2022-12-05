// temporary until this moves to contentful

import { set, subHours } from 'date-fns';

export interface BusinessOrderOption {
  buildingName: string;
  addr: string;
  deliveryTimes: Date[];
}

const businessOrderConfig: BusinessOrderOption[] = [
  {
    buildingName: 'Downtown (South)',
    addr: '618 East South street',
    deliveryTimes: [set(new Date(), { year: 2022, month: 11, date: 29, hours: 16, minutes: 0 })],
  },
  {
    buildingName: 'Downtown (Pine)',
    addr: '100 East Pine Street',
    deliveryTimes: [set(new Date(), { year: 2022, month: 11, date: 29, hours: 15, minutes: 0 })],
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
