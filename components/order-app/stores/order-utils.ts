import { insertGoogleMapsScript } from '../checkout/fulfillment/delivery-autocomplete/autocomplete';

const getDistance = (TMS, deliveryLocation) =>
  new Promise((resolve, reject) => {
    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [TMS],
        destinations: [deliveryLocation],
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.IMPERIAL,
      },
      (result) => {
        resolve(result);
      },
    );
  });

export const distanceFromTMS = async (googlePlacesObj) => {
  await insertGoogleMapsScript();

  const TMSLocation = new google.maps.LatLng(28.539307, -81.286839);
  const result = await getDistance(TMSLocation, googlePlacesObj.geometry.location);
  const distanceInMiles = Number(result.rows[0].elements[0].distance.text.split(' ')[0]);
  return distanceInMiles;
};

export const formatGooglePlacesObj = ({ name, formatted_address }) => {
  if (formatted_address.includes(name)) {
    return formatted_address;
  } else {
    return `${name}, ${formatted_address}`;
  }
};
