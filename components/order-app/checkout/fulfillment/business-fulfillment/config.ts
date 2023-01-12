// temporary until this moves to contentful

import { set, subHours } from 'date-fns';

export interface BusinessOrderOption {
  buildingName: string;
  addr: string;
  deliveryTimes: Date[];
}

const businessOrderConfig: BusinessOrderOption[] = [
  {
    buildingName: 'Maitland Paragon',
    addr: '1060 Maitland Center Commons Blvd',
    deliveryTimes: [set(new Date(), { year: 2023, month: 0, date: 18, hours: 16, minutes: 0 })],
  },
  {
    buildingName: 'Maitland American',
    addr: '1051 Winderely Place',
    deliveryTimes: [set(new Date(), { year: 2023, month: 0, date: 18, hours: 16, minutes: 5 })],
  },
  {
    buildingName: 'Maitland Alliance',
    addr: '2200 Lucien Way',
    deliveryTimes: [set(new Date(), { year: 2023, month: 0, date: 18, hours: 16, minutes: 15 })],
  },
  {
    buildingName: 'Maitland Lake Lucien',
    addr: '2201 Lucien Way',
    deliveryTimes: [set(new Date(), { year: 2023, month: 0, date: 18, hours: 16, minutes: 20 })],
  },
  {
    buildingName: 'Maitland Lucien Green',
    addr: '2250 Lucien Way',
    deliveryTimes: [set(new Date(), { year: 2023, month: 0, date: 18, hours: 16, minutes: 25 })],
  },
  {
    buildingName: 'Fairwinds Tower',
    addr: '135 West Central Boulevar',
    deliveryTimes: [set(new Date(), { year: 2023, month: 0, date: 19, hours: 16, minutes: 0 })],
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
