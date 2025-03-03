import PropTypes from 'prop-types';
import { MapContainer, TileLayer } from 'react-leaflet';
import GeoCoderMarker from '../GeoCoderMarker/GeoCoderMarker';

const Map = ({ address, city, country }) => {
  return (
    <>
      <MapContainer
        center={[53.35, 18.8]}
        zoom={1}
        scrollWheelZoom={false}
        style={{
          height: '40vh',
          width: '100%',
          marginTop: '20px',
          zIndex: 0,
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <GeoCoderMarker address={`${address} ${city} ${country}`} />
      </MapContainer>
    </>
  );
};

Map.propTypes = {
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default Map;
