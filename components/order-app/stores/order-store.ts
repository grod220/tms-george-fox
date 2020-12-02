import { makeAutoObservable } from 'mobx';
import ItemStore from './item-store';
import { getNextAvailableFulfillmentDateStr, getNextAvailableFulfillmentTimeStr } from './date-utils';
import DateStore from './date-store';
import FulfillmentStore from './fulfillment-store';
import RegisterStore from './register-store';

export type ActiveTab = 'Full menu' | 'Vegetarian' | 'Vegan' | 'Gluten Free' | 'Catering Menu' | 'Checkout';

class OrderStore {
  activeTab: ActiveTab;
  orderType: string;
  shoppingCart: ItemStore[];
  fulfillment: FulfillmentStore;
  dateStore: DateStore;
  registerStore: RegisterStore;

  constructor() {
    makeAutoObservable(this);
    this.shoppingCart = [];
    this.fulfillment = new FulfillmentStore();
    this.dateStore = new DateStore(this.fulfillment);
    this.registerStore = new RegisterStore(this.fulfillment, this.shoppingCart);
  }

  setActiveTab(tab: ActiveTab): void {
    this.activeTab = tab;
  }

  setOrderType(type: string) {
    this.orderType = type;
  }

  initializeModule(catering: boolean | undefined) {
    if ((catering && this.orderType !== 'catering') || (!catering && this.orderType !== 'normal')) {
      this.shoppingCart.length = 0; // clear cart
    }
    if (catering) {
      this.setOrderType('catering');
      this.fulfillment.setFulfillmentOption('delivery');
      this.setActiveTab('Catering Menu');
    } else {
      this.setOrderType('normal');
      this.fulfillment.setFulfillmentOption('pickup');
      this.setActiveTab('Full menu');
    }
    this.dateStore.fulfillmentDate = getNextAvailableFulfillmentDateStr();
    this.dateStore.fulfillmentTime = getNextAvailableFulfillmentTimeStr();
  }

  addToCart(itemStore: ItemStore) {
    this.shoppingCart.push(itemStore);
  }

  get inputFieldsReady() {
    const baseQualificationsSatisfied =
      Boolean(this.fulfillment.contactName) &&
      Boolean(this.fulfillment.contactNumber) &&
      Boolean(this.dateStore.fulfillmentDate) &&
      !this.dateStore.fulfillmentDateError &&
      Boolean(this.dateStore.fulfillmentTime) &&
      !this.dateStore.fulfillmentTimeError;
    if (this.orderType === 'normal' || (this.orderType === 'catering' && this.fulfillment.option === 'pickup')) {
      return baseQualificationsSatisfied;
    } else {
      return (
        baseQualificationsSatisfied &&
        Boolean(this.fulfillment.deliveryLocation) &&
        typeof this.registerStore.deliveryFee === 'number' &&
        Number(this.fulfillment.numberOfGuests) > 0
      );
    }
  }
}

export default new OrderStore();
