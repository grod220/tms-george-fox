import { makeAutoObservable } from 'mobx';
import ItemStore from './item-store';
import { AddToCart } from '../order-menu/menu-section/menu-item/add-to-cart';
import * as React from 'react';

export type ActiveTab = 'Full menu' | 'Vegetarian' | 'Vegan' | 'Gluten Free' | 'Catering Menu';

class OrderStore {
  activeTab: ActiveTab;
  orderType: string;
  fulfillmentOption: string;
  shoppingCart: ItemStore[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setActiveTab(tab: ActiveTab): void {
    this.activeTab = tab;
  }

  setFulfillmentOption(type: string) {
    this.fulfillmentOption = type;
  }

  setOrderType(type: string) {
    this.orderType = type;
  }

  initializeModule(catering: boolean | undefined) {
    if ((catering && this.orderType !== 'catering') || (!catering && this.orderType !== 'normal')) {
      // this.shoppingCart = []; // clear cart
    }
    if (catering) {
      this.setOrderType('catering');
      this.setFulfillmentOption('delivery');
      this.setActiveTab('Catering Menu');
    } else {
      this.setOrderType('normal');
      this.setFulfillmentOption('pickup');
      this.setActiveTab('Full menu');
    }
    // OrderStore.dateStore.fulfillmentDate = getNextAvailableFulfillmentDateStr();
    // OrderStore.dateStore.fulfillmentTime = getNextAvailableFulfillmentTimeStr();
  }

  addToCart(itemStore: ItemStore) {
    this.shoppingCart.push(itemStore);
  }
}

export default new OrderStore();
