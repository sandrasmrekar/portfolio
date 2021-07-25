import styles from "./index.module.css";

import GoogleMapReact from "google-map-react";
import { mapStyle } from "../../constants/map";
import BoxShape from "../BoxShape";
import MarkerImg from "../../assets/svg/marker.svg";

const MAP_OPTIONS = { styles: mapStyle, scrollwheel: false };
const API_KEY = { key: process.env.REACT_APP_GOOGLE_API_KEY };
const MY_POSITION = { lat: 55.93486, lng: 13.53959 };

const Marker = (lat, lng) => (
  <img
    className={styles.marker}
    lat={lat}
    lng={lng}
    src={MarkerImg}
    alt="marker"
  />
);

export default function Map() {
  return (
    <div className={styles.mapContainer}>
      <BoxShape>
        <p>Based in Skåne, Sweden</p>
        <p>Have any questions? </p>
        <p>Send an email down below</p>
      </BoxShape>

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
    </div>
  );
}
