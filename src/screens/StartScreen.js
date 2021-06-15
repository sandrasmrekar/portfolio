/**
 * This is the landing screen.
 */

import { useEffect } from "react";
import LinkIcons from "../components/LinkIcons";
import { START_SECTION } from "../constants/sections";
import styles from "./StartScreen.module.css";

export default function StartScreen() {
  return (
    <div id={START_SECTION} className={styles.container}>
      <div id="background" className={styles.background} />
      <div className={styles.titleContainer}>
        <p className={styles.smallText}>Hi I'm </p>
        <h1 className={styles.header}>SANDRA SMREKAR</h1>
        <h2 className={styles.subHeader}>A frontend developer</h2>
        <h4 className={styles.text}>
          I am a software engineer with passion for coding and learning new
          things.
        </h4>
      </div>
      <LinkIcons />
    </div>
  );
}
