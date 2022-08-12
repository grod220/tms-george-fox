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

  get subTotal() {
    return addZero(parseFloat(this.shoppingCart.reduce((acc, item) => acc + item.total, 0).toFixed(2)));
  }

  get tax() {
    return addZero(parseFloat((Number(this.subTotal) * 0.07).toFixed(2)));
  }

  get grandTotal() {
    let total = Number(this.subTotal) + Number(this.tip) + Number(this.tax);
    if (this.fulfillmentStore.option === 'delivery' && typeof this.deliveryFee === 'number') {
      total += this.deliveryFee;
    }
    return addZero(parseFloat(total.toFixed(2)));
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
      if (Number(this.subTotal) >= 200) {
        return 35;
      } else {
        return '⚠️ Minimum cart total for this distance is $200';
      }
    } else if (this.fulfillmentStore.deliveryMiles < 20) {
      if (Number(this.subTotal) >= 300) {
        return 50;
      } else {
        return '⚠️ Minimum cart total for this distance is 300';
      }
    } else if (this.fulfillmentStore.deliveryMiles < 30) {
      if (Number(this.subTotal) >= 400) {
        return 75;
      } else {
        return '⚠️ Minimum cart total for this distance is 400';
      }
    } else {
      if (Number(this.subTotal) >= 500) {
        return 100;
      } else {
        return '⚠️ Minimum cart total for this distance is 500';
      }
    }
  }
}

export default RegisterStore;
