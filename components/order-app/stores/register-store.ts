import { makeAutoObservable } from 'mobx';
import addZero from '../../../utilities/add-zero';
import ItemStore from './item-store';
import FulfillmentStore from './fulfillment-store';

class RegisterStore {
  tip: number = 0;
  shoppingCart: ItemStore[];
  fulfillmentStore: FulfillmentStore;

  constructor(fulfillmentStore: FulfillmentStore, shoppingCart: ItemStore[]) {
    makeAutoObservable(this);
    this.fulfillmentStore = fulfillmentStore;
    this.shoppingCart = shoppingCart;
  }

  get tipPercent() {
    return ((this.tip / Number(this.subTotal)) * 100).toFixed();
  }

  get subTotalRaw() {
    return this.shoppingCart.reduce((acc, item) => acc + item.total, 0);
  }

  get subTotal() {
    return addZero(parseFloat(this.subTotalRaw.toFixed(2)));
  }

  get rawTax() {
    return parseFloat((Number(this.subTotal) * 0.07).toFixed(2));
  }

  get tax() {
    return addZero(this.rawTax);
  }

  get grandTotalRaw() {
    let total = this.subTotalRaw + this.tip + this.rawTax;
    if (this.fulfillmentStore.option === 'delivery' && typeof this.deliveryFee === 'number') {
      total += this.deliveryFee;
    }
    return parseFloat(total.toFixed(2));
  }

  get grandTotal() {
    return addZero(this.grandTotalRaw);
  }

  setTip(str: string) {
    this.tip = Number(str);
  }

  get deliveryFee(): string | number {
    if (this.fulfillmentStore.loadingMiles) {
      return 'Calculating cost ⌛';
    }

    if (!this.fulfillmentStore.deliveryLocation) {
      return 'Select delivery location';
    }

    if (this.fulfillmentStore.errorFromGoogle || !this.fulfillmentStore.deliveryMiles) {
      return '🚫 error with Google Maps';
    }

    if (this.fulfillmentStore.deliveryMiles < 10) {
      return 35;
    } else if (this.fulfillmentStore.deliveryMiles < 20) {
      return 50;
    } else if (this.fulfillmentStore.deliveryMiles < 30) {
      return 75;
    } else {
      return 100;
    }
  }
}

export default RegisterStore;
