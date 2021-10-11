import React from "react";
import styles from '../styles/components/Marker.module.scss';
import MarkerIcon from "../icons/MarkerIcon";

const Marker = ({ text, lat, lng }) => (
  <div className={styles.container}>
    <MarkerIcon />
    <img className={styles.img} src="images/marker-icon.png" alt="" />
    <p className={styles.text}>{text}</p>
  </div>
);

export default Marker;
