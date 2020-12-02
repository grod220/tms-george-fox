import { makeAutoObservable } from 'mobx';

class FulfillmentStore {
  option: 'pickup' | 'delivery';
  contactName: string;
  contactNumber: string;
  numberOfGuests: number;
  specialInstructions: string;

  constructor() {
    makeAutoObservable(this);
  }

  setFulfillmentOption(type: 'pickup' | 'delivery') {
    this.option = type;
  }

  setContactName(str: string) {
    this.contactName = str;
  }

  setContactNumber(str: string) {
    this.contactNumber = str;
  }

  setNumberOfGuests(str: string) {
    this.numberOfGuests = Number(str);
  }

  setSpecialInstructions(str: string) {
    this.specialInstructions = str;
  }
}

export default FulfillmentStore;
