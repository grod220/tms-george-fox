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
  {
    buildingName: 'Maitland Paragon',
    addr: '1060 Maitland Center Commons Blvd',
    deliveryTimes: [set(new Date(), { year: 2023, month: 0, date: 11, hours: 16, minutes: 0 })],
  },
  {
    buildingName: 'Maitland American',
    addr: '1051 Winderely Place',
    deliveryTimes: [set(new Date(), { year: 2023, month: 0, date: 11, hours: 16, minutes: 0 })],
  },
  {
    buildingName: 'Maitland Alliance',
    addr: '2200 Lucien Way',
    deliveryTimes: [set(new Date(), { year: 2023, month: 0, date: 18, hours: 16, minutes: 0 })],
  },
  {
    buildingName: 'Maitland Lake Lucien',
    addr: '2201 Lucien Way',
    deliveryTimes: [set(new Date(), { year: 2023, month: 0, date: 18, hours: 16, minutes: 0 })],
  },
  {
    buildingName: 'Maitland Lucien Green',
    addr: '2250 Lucien Way',
    deliveryTimes: [set(new Date(), { year: 2023, month: 0, date: 18, hours: 16, minutes: 0 })],
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
