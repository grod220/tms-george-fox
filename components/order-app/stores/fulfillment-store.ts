import { makeAutoObservable, reaction } from 'mobx';
import { distanceFromTMS } from './order-utils';

class FulfillmentStore {
  option: 'pickup' | 'delivery';
  contactName: string;
  contactNumber: string;
  numberOfGuests: number;
  specialInstructions: string;

  deliveryLocation: google.maps.places.PlaceResult;
  errorFromGoogle: boolean;
  loadingMiles: boolean;
  deliveryMiles: number;

  constructor() {
    makeAutoObservable(this);
    reaction(
      () => this.deliveryLocation,
      (googlePlacesObj) => this.handleDeliverLocationUpdate(googlePlacesObj),
    );
  }

  handleDeliverLocationUpdate(googlePlacesObj) {
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

  setDeliveryLocation(location: google.maps.places.PlaceResult) {
    this.deliveryLocation = location;
  }

  setErrorFromGoogle(bool: boolean) {
    this.errorFromGoogle = bool;
  }
}

export default FulfillmentStore;
