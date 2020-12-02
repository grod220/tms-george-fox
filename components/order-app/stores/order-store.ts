import { makeAutoObservable } from 'mobx';
import ItemStore from './item-store';
import { getNextAvailableFulfillmentDateStr, getNextAvailableFulfillmentTimeStr } from './date-utils';
import DateStore from './date-store';
import FulfillmentStore from './fulfillment-store';
import addZero from '../../../utilities/add-zero';

export type ActiveTab = 'Full menu' | 'Vegetarian' | 'Vegan' | 'Gluten Free' | 'Catering Menu' | 'Checkout';

class OrderStore {
  activeTab: ActiveTab;
  orderType: string;
  shoppingCart: ItemStore[] = [];
  dateStore: DateStore = new DateStore();
  fulfillment: FulfillmentStore = new FulfillmentStore();
  tip: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setActiveTab(tab: ActiveTab): void {
    this.activeTab = tab;
  }

  setOrderType(type: string) {
    this.orderType = type;
  }

  initializeModule(catering: boolean | undefined) {
    if ((catering && this.orderType !== 'catering') || (!catering && this.orderType !== 'normal')) {
      this.shoppingCart = []; // clear cart
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

  get tipPercent() {
    return ((this.tip / Number(this.subTotal)) * 100).toFixed();
  }

  get subTotal() {
    return addZero(parseFloat(this.shoppingCart.reduce((acc, item) => acc + item.total, 0).toFixed(2)));
  }

  get tax() {
    return addZero(parseFloat((Number(this.subTotal) * 0.07).toFixed(2)));
  }

  get grandTotal() {
    let total = Number(this.subTotal) + Number(this.tip) + Number(this.tax);
    if (this.fulfillment.option === 'delivery' && typeof this.deliveryFee === 'number') {
      total += this.deliveryFee;
    }
    return addZero(parseFloat(total.toFixed(2)));
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
        Boolean(this.deliveryLocation) &&
        typeof this.deliveryFee === 'number' &&
        Number(this.fulfillment.numberOfGuests) > 0
      );
    }
  }

  setTip(str: string) {
    this.tip = Number(str);
  }
}

export default new OrderStore();
