import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapStyles = {
    height: "400px",
    width: "100%"
  };

  // Replace these coordinates with your organization's actual latitude and longitude
  const organizationLocation = {
    lat: 40.712776, // Example: Latitude for New York City
    lng: -74.005974 // Example: Longitude for New York City
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={organizationLocation}
      >
        <Marker position={organizationLocation} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;