import { insertGoogleMapsScript } from '../checkout/fulfillment/delivery-autocomplete/autocomplete';

const getDistance = (
  TMS: google.maps.LatLng,
  deliveryLocation: google.maps.LatLng,
): Promise<google.maps.DistanceMatrixResponse | null> =>
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
        resolve(result);
      },
    );
  });

export const distanceFromTMS = async (googlePlacesObj: google.maps.places.PlaceResult) => {
  await insertGoogleMapsScript();

  const TMSLocation = new google.maps.LatLng(28.539307, -81.286839);
  if (!googlePlacesObj.geometry?.location) {
    throw new Error('Location not found');
  }

  const result = await getDistance(TMSLocation, googlePlacesObj.geometry.location);
  if (!result) throw new Error('Error getting distance from Google Maps Api')

  const distanceInMiles = Number(result.rows[0].elements[0].distance.text.split(' ')[0]);
  return distanceInMiles;
};

export const formatGooglePlacesObj = ({ name, formatted_address }: google.maps.places.PlaceResult) => {
  if (formatted_address && name && formatted_address.includes(name)) {
    return formatted_address;
  } else {
    return `${name}, ${formatted_address}`;
  }
};
