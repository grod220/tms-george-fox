import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import MapStyles from './map-styles.json';
import CustomMarker from './marker.png';

export const MAPS_API_KEY = 'AIzaSyCDKIcbVdcrstjcpUtcW8qmppkfTD2mRC8';

const directionsLink = () => {
  window.open(
    'https://www.google.de/maps/place/The+Meatball+Stoppe/@28.5323983,-81.3232052,12.69z/data=!4m5!3m4!1s0x88e765ae727e7509:0x276197e7b025a43e!8m2!3d28.5394622!4d-81.2868018?hl=en',
    '_blank',
  );
};

const Map = () => (
  <LoadScript googleMapsApiKey={MAPS_API_KEY}>
    <GoogleMap
      zoom={16}
      center={{ lat: 28.5394327, lng: -81.2868005 }}
      options={{ styles: MapStyles, disableDefaultUI: true, scrollwheel: false }}
      mapContainerStyle={{ height: '46rem', marginTop: '6rem' }}
    >
      <Marker position={{ lat: 28.5394327, lng: -81.2868005 }} icon={CustomMarker} onClick={directionsLink} />
    </GoogleMap>
  </LoadScript>
);

export default React.memo(Map);
