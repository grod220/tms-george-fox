import { makeAutoObservable, reaction } from 'mobx';
import { distanceFromTMS } from './order-utils';
import DateStore from './date-store';

class FulfillmentStore {
  option: 'pickup' | 'delivery' = 'pickup';
  contactName: string = '';
  contactNumber: string = '';
  numberOfGuests: number = 0;
  specialInstructions: string = '';

  deliveryLocation?: google.maps.places.PlaceResult;
  errorFromGoogle: boolean = false;
  loadingMiles: boolean = false;
  deliveryMiles?: number;

  buildingName: string = '';
  businessSuite: string = '';

  dateStore: DateStore;

  constructor() {
    makeAutoObservable(this);
    this.dateStore = new DateStore(this);

    reaction(
      () => this.deliveryLocation,
      (googlePlacesObj) => {
        if (googlePlacesObj) this.handleDeliverLocationUpdate(googlePlacesObj);
      },
    );
  }

  handleDeliverLocationUpdate(googlePlacesObj: google.maps.places.PlaceResult) {
    this.loadingMiles = true;
    distanceFromTMS(googlePlacesObj)
      .then((miles) => {
        this.deliveryMiles = miles;
        this.loadingMiles = false;
      })
      .catch((e) => {
        console.log(e);
        this.loadingMiles = false;
        this.errorFromGoogle = true;
      });
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

  setDeliveryLocation(location?: google.maps.places.PlaceResult) {
    this.deliveryLocation = location;
  }

  setErrorFromGoogle(bool: boolean) {
    this.errorFromGoogle = bool;
  }

  setBusinessSuite(str: string) {
    this.businessSuite = str;
  }

  setBuildingName(str: string) {
    this.buildingName = str;
  }
}

export default FulfillmentStore;
