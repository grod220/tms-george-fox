// temporary until this moves to contentful

import { set, subHours } from 'date-fns';

export interface BusinessOrderOption {
  buildingName: string;
  addr: string;
  deliveryTimes: Date[];
}

const businessOrderConfig: BusinessOrderOption[] = [
  {
    buildingName: 'Fairwinds',
    addr: '1st floor conference room, 135 W. Central Blvd.',
    deliveryTimes: [set(new Date(), { year: 2023, month: 1, date: 23, hours: 16, minutes: 0 })],
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
