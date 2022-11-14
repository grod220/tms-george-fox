import { makeAutoObservable } from 'mobx';
import {
  isInPast,
  isOnASunday,
  parseHTMLDateAndTime,
  parseISOStr,
  withinLeadTime,
  withinOpeningHours,
} from './date-utils';
import FulfillmentStore from './fulfillment-store';

class DateStore {
  fulfillmentTimeAndDate?: Date;
  fulfillmentStore: FulfillmentStore;

  constructor(fulfillmentStore: FulfillmentStore) {
    makeAutoObservable(this);
    this.fulfillmentStore = fulfillmentStore;
  }

  get fulfillmentTimeAndDateError() {
    if (!this.fulfillmentTimeAndDate) return 'Date is invalid';
    if (isInPast(this.fulfillmentTimeAndDate)) return 'Date is in past';
    if (isOnASunday(this.fulfillmentTimeAndDate)) return 'Not open on Sundays';
    if (!withinOpeningHours(this.fulfillmentTimeAndDate)) return 'Not within opening hours';
    if (!withinLeadTime(this.fulfillmentTimeAndDate)) return 'Need lead time';
  }

  setFulfillmentDateAndTime(str: string) {
    this.fulfillmentTimeAndDate = parseHTMLDateAndTime(str);
  }

  setFulfillmentWithISOStr(isoStr?: string) {
    this.fulfillmentTimeAndDate = isoStr ? parseISOStr(isoStr) : undefined;
  }
}

export default DateStore;
