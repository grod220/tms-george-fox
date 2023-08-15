import { makeAutoObservable } from 'mobx';
import ItemStore from './item-store';
import { getNextAvailableFulfillmentDateAndTime } from './date-utils';
import FulfillmentStore from './fulfillment-store';
import RegisterStore from './register-store';

export type ActiveTab =
  | 'Full menu'
  | 'Vegetarian'
  | 'Vegan'
  | 'Gluten Free'
  | 'Catering Menu'
  | 'Checkout'
  | 'Full menu #business';

export type OrderType = 'normal' | 'catering' | 'business';

class OrderStore {
  activeTab: ActiveTab = 'Full menu';
  orderType: OrderType = 'normal';
  shoppingCart: ItemStore[];
  fulfillment: FulfillmentStore;
  registerStore: RegisterStore;

  constructor() {
    makeAutoObservable(this);
    this.shoppingCart = [];
    this.fulfillment = new FulfillmentStore();
    this.registerStore = new RegisterStore(this.fulfillment, this.shoppingCart);
  }

  setActiveTab(tab: ActiveTab): void {
    this.activeTab = tab;
  }

  setOrderType(type: OrderType) {
    this.orderType = type;
  }

  initializeModule(type: OrderType) {
    this.setOrderType(type);

    // Clear cart
    if (
      (type == 'normal' && this.orderType !== 'normal') ||
      (type == 'catering' && this.orderType !== 'catering') ||
      (type == 'business' && this.orderType !== 'business')
    ) {
      this.shoppingCart.length = 0;
    }

    if (type == 'normal' || type == 'catering') {
      this.fulfillment.dateStore.fulfillmentTimeAndDate = getNextAvailableFulfillmentDateAndTime();
    }

    if (type == 'catering') {
      this.fulfillment.setFulfillmentOption('delivery');
      this.setActiveTab('Catering Menu');
    } else if (type == 'normal') {
      this.fulfillment.setFulfillmentOption('pickup');
      this.setActiveTab('Full menu');
    } else if (type == 'business') {
      this.setActiveTab('Full menu #business');
      this.fulfillment.setFulfillmentOption('delivery');
    }
  }

  addToCart(itemStore: ItemStore) {
    this.shoppingCart.push(itemStore);
  }

  get inputFieldsReady() {
    const baseQualificationsSatisfied =
      Boolean(this.fulfillment.contactName) &&
      Boolean(this.fulfillment.contactNumber) &&
      Boolean(this.fulfillment.dateStore.fulfillmentTimeAndDate) &&
      !this.fulfillment.dateStore.fulfillmentTimeAndDateError;
    if (this.orderType === 'normal' || (this.orderType === 'catering' && this.fulfillment.option === 'pickup')) {
      return baseQualificationsSatisfied;
    } else if (this.orderType === 'catering' && this.fulfillment.option === 'delivery') {
      return (
        baseQualificationsSatisfied &&
        Boolean(this.fulfillment.deliveryLocation) &&
        typeof this.registerStore.deliveryFee === 'number' &&
        Number(this.fulfillment.numberOfGuests) > 0 &&
        this.registerStore.grandTotalRaw >= 1000
      );
    } else if (this.orderType === 'business') {
      return (
        Boolean(this.fulfillment.contactName) &&
        Boolean(this.fulfillment.contactNumber) &&
        Boolean(this.fulfillment.dateStore.fulfillmentTimeAndDate) &&
        !this.fulfillment.dateStore.fulfillmentTimeAndDateError &&
        Boolean(this.fulfillment.companyName) &&
        Boolean(this.fulfillment.businessSuite) &&
        Boolean(this.fulfillment.buildingName) &&
        this.registerStore.grandTotalRaw >= 30
      );
    } else {
      alert('Contact owners about website order bug');
      return false;
    }
  }
}

export default new OrderStore();
