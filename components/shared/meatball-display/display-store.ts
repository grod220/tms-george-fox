import { makeAutoObservable } from 'mobx';
import { MeatballData, MeatballDisplayData } from './meatball-display-data';

class MeatballDisplayStore {
  meatballData: MeatballData[];
  onlyGlutenFree: boolean = false;
  glutenFreeFilter = (m: MeatballData) => (this.onlyGlutenFree ? m.glutenFree : true);

  onlyVegetarian: boolean = false;
  vegetarianFilter = (m: MeatballData) => (this.onlyVegetarian ? m.vegetarian : true);

  onlyVegan: boolean = false;
  veganFilter = (m: MeatballData) => (this.onlyVegan ? m.vegan : true);

  constructor(meatballData: MeatballData[]) {
    makeAutoObservable(this);
    this.meatballData = meatballData;
  }

  get meatballsToDisplay(): MeatballData[] {
    return this.meatballData.filter(this.glutenFreeFilter).filter(this.vegetarianFilter).filter(this.veganFilter);
  }

  toggleGlutenFree() {
    this.onlyGlutenFree = !this.onlyGlutenFree;
  }

  toggleVegetarian() {
    this.onlyVegetarian = !this.onlyVegetarian;
  }

  toggleVegan() {
    this.onlyVegan = !this.onlyVegan;
  }
}

export default new MeatballDisplayStore(MeatballDisplayData);
