import { makeAutoObservable, reaction } from 'mobx';
import { isBefore, isSunday } from 'date-fns';
import {
  getNextAvailableFulfillmentDate,
  isDateInPast,
  parseHTMLDateAndTime,
  parseHTMLDateStr,
  withinLeadTime,
  withinOpeningHours,
} from './date-utils';

class DateStore {
  fulfillmentDate: string;
  fulfillmentDateError: string;
  fulfillmentTime: string;
  fulfillmentTimeError: string;

  constructor() {
    makeAutoObservable(this);
    reaction(
      () => this.fulfillmentDate,
      (htmlDateStr) => {
        const proposedDate = parseHTMLDateStr(htmlDateStr);

        if (!this.fulfillmentDate) {
          this.fulfillmentDateError = 'Date is invalid';
        } else if (isDateInPast(proposedDate)) {
          this.fulfillmentDateError = 'Date is in past';
        } else if (isSunday(proposedDate)) {
          this.fulfillmentDateError = 'Not open on Sundays';
        } else if (isBefore(proposedDate, getNextAvailableFulfillmentDate())) {
          this.fulfillmentDateError = 'Pick later date';
        } else {
          this.fulfillmentDateError = undefined;
        }

        this.validateTime();
      },
    );

    reaction(
      () => this.fulfillmentTime,
      () => this.validateTime(),
    );
  }

  validateTime() {
    // Not showing error messages if there is a date error message
    if (!this.fulfillmentDate || !this.fulfillmentTime || this.fulfillmentDateError) {
      this.fulfillmentTimeError = ' ';
      return;
    }

    const proposedDateObj = parseHTMLDateAndTime(this.fulfillmentDate, this.fulfillmentTime);

    if (!withinOpeningHours(proposedDateObj)) {
      this.fulfillmentTimeError = 'Not open';
    } else if (!withinLeadTime(proposedDateObj)) {
      this.fulfillmentTimeError = 'Too early';
    } else {
      this.fulfillmentTimeError = undefined;
    }
  }

  setFulfillmentDate(str: string) {
    this.fulfillmentDate = str;
  }

  setFulfillmentTime(str: string) {
    this.fulfillmentTime = str;
  }
}

export default DateStore;
