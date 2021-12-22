import { makeAutoObservable } from 'mobx';
import { isInPast, isOnASunday, parseHTMLDateAndTime, withinLeadTime, withinOpeningHours } from './date-utils';
import FulfillmentStore from './fulfillment-store';

class DateStore {
  fulfillmentTimeAndDate: Date = new Date();
  fulfillmentStore: FulfillmentStore;

  constructor(fulfillmentStore: FulfillmentStore) {
    makeAutoObservable(this);
    this.fulfillmentStore = fulfillmentStore;
  }

  get fulfillmentTimeAndDateError(): string {
    if (!this.fulfillmentTimeAndDate) {
      return 'Date is invalid';
    }

    if (isInPast(this.fulfillmentTimeAndDate)) {
      return 'Date is in past';
    }

    if (isOnASunday(this.fulfillmentTimeAndDate)) {
      return 'Not open on Sundays';
    }

    if (!withinOpeningHours(this.fulfillmentTimeAndDate)) {
      return 'Not within opening hours';
    }

    if (!withinLeadTime(this.fulfillmentTimeAndDate)) {
      return 'Need lead time';
    }

    return 'Unknown error';
  }

  setFulfillmentDateAndTime(str: string) {
    this.fulfillmentTimeAndDate = parseHTMLDateAndTime(str);
  }
}

export default DateStore;
