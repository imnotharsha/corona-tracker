import React from 'react';
import GoogleMapReact from 'google-map-react';

export default function Map({ lat, long, name, Total }) {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: 'AIzaSyCy6ipNdzlxBVyikqLzxvN9U1uTP-Z3Grc',
      }}
      defaultCenter={{
        lat: 20,
        lng: 77,
      }}
      defaultZoom={1}>
      <div
        lat={lat}
        lng={long}
        style={{
          color: 'red',
          backgroundColor: 'white',
          height: '30px',
          width: '50px',
          fontSize: '10px',
          padding: '3px',
        }}>
        {name.toUpperCase()}
        <br />
        {Total}
      </div>
    </GoogleMapReact>
  );
}
