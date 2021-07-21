import styles from "./index.module.css";

import GoogleMapReact from "google-map-react";
import { mapStyle } from "../../constants/map";
import mapGeometry from "../../assets/svg/mapGeometry.svg";

const MAP_OPTIONS = { styles: mapStyle, scrollwheel: false };
const API_KEY = { key: process.env.REACT_APP_GOOGLE_API_KEY };
const MY_POSITION = { lat: 55.5932, lng: 13.0214 };

const Marker = (lat, lng) => (
  <div className={styles.marker} lat={lat} lng={lng} />
);

const GeometryShape = () => (
  <div>
    <img id={styles.img} src={mapGeometry} alt="img" />
    <div className={styles.text}>
      <p>Based in Skåne, Sweden</p>
      <p>Have any questions? </p>
      <p>Send an email down below</p>
    </div>
  </div>
);

export default function Map() {
  return (
    <div className={styles.mapContainer}>
      <div className={styles.map}>
        <GoogleMapReact
          bootstrapURLKeys={API_KEY}
          options={MAP_OPTIONS}
          defaultZoom={1}
          defaultCenter={MY_POSITION}
        >
          <Marker lat={MY_POSITION.lat} lng={MY_POSITION.lng} />
        </GoogleMapReact>
      </div>
      <GeometryShape />
    </div>
  );
}
