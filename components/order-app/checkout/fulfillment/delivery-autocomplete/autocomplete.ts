import OrderStore from '../../../stores/order-store';
import { MAPS_API_KEY } from '../../../../homepage/map';

export const insertGoogleMapsScript = () =>
  new Promise((resolve, reject) => {
    if (document.getElementById('autocomplete-script')) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.id = 'autocomplete-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.addEventListener('load', resolve);
    script.addEventListener('error', reject);
    document.body.appendChild(script);
  });

const attachAutoCompleteEl = () => {
  const input = document.getElementById('location-input') as HTMLInputElement;
  const autocomplete = new google.maps.places.Autocomplete(input, {
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng({ lat: 27.9999932635, lng: -81.9420167728 }), // southwest corner of bound
      new google.maps.LatLng({ lat: 28.974260002, lng: -80.7213136726 }), // northeast corner of bound
    ),
    fields: ['name', 'formatted_address', 'geometry'],
    strictBounds: true,
  });
  autocomplete.addListener('place_changed', function () {
    OrderStore.fulfillment.setErrorFromGoogle(false);
    OrderStore.fulfillment.setDeliveryLocation(autocomplete.getPlace());
  });
};

export const initAutocomplete = async () => {
  await insertGoogleMapsScript();
  attachAutoCompleteEl();
};

export const cleanupMapsElements = () => {
  const pacContainer = document.querySelector('.pac-container');
  if (pacContainer) {
    pacContainer.remove();
  }
};
