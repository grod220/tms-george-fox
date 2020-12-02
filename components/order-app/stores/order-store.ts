import { makeAutoObservable } from 'mobx';

export type ActiveTab = 'Full menu' | 'Vegetarian' | 'Vegan' | 'Gluten Free' | 'Catering Menu';

class OrderStore {
  activeTab: ActiveTab;
  orderType: string;
  fulfillmentOption: string;

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
}

export default new OrderStore();
