import { insertGoogleMapsScript } from '../checkout/fulfillment/delivery-autocomplete/autocomplete';

const getDistance = (
  TMS: google.maps.LatLng,
  deliveryLocation: google.maps.LatLng,
): Promise<google.maps.DistanceMatrixResponse> =>
  new Promise((resolve, reject) => {
    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [TMS],
        destinations: [deliveryLocation],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL,
      },
      (result) => {
        if (result) {
          resolve(result);
        }
      },
    );
  });

export const distanceFromTMS = async (googlePlacesObj: google.maps.places.PlaceResult) => {
  await insertGoogleMapsScript();

  const TMSLocation = new google.maps.LatLng(28.539307, -81.286839);
  if (googlePlacesObj.geometry && googlePlacesObj.geometry.location) {
    const result = await getDistance(TMSLocation, googlePlacesObj.geometry.location);
    const distanceInMiles = Number(result.rows[0].elements[0].distance.text.split(' ')[0]);
    return distanceInMiles;
  }
  return 0;
};

export const formatGooglePlacesObj = ({ name, formatted_address }: google.maps.places.PlaceResult) => {
  if (formatted_address && name && formatted_address.includes(name)) {
    return formatted_address;
  } else {
    return `${name}, ${formatted_address}`;
  }
};
