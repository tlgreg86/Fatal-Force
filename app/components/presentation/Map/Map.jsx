import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import { locations } from '../../helpers/stateCoordinates';

export const Map = withGoogleMap(({ markers }) => {
  return (
    <GoogleMap
      defaultZoom={4}
      defaultCenter={{ lat: 42.877742, lng: -97.380979 }}
    >
      {markers.map((person, index) => {
        const coordinates = locations.filter((location) => {
          return location.state === person.state;
        });

        return (
          <Marker key={index}
                  position={{ lat: coordinates[0].latitude, lng: coordinates[0].longitude }} />
        );
      })}
    </GoogleMap>
  );
});
