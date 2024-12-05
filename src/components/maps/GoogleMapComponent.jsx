import { useMemo } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY, MAP_CONFIG } from '../../config/constants';

function GoogleMapComponent() {
  const center = useMemo(() => MAP_CONFIG.defaultCenter, []);

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={MAP_CONFIG.styles}
        zoom={MAP_CONFIG.defaultZoom}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapComponent;