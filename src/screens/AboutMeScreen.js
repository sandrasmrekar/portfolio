import styles from "./AboutMeScreen.module.css";
import { ReactComponent as Background } from "../assets/svg/abstractBackground.svg";

import { ABOUT_ME_SECTION } from "../constants/sections";
import { Bubble } from "../components/Bubble";

export default function AboutMeScreen() {
  return (
    <div id={ABOUT_ME_SECTION} className={styles.container}>
      <div className={styles.subContainer}>
        <h1 className={styles.header}>
          ABOUT <h1 className={styles.blue}>ME</h1>
        </h1>
        <p>
          Software engineer with a lot of passion for buildng cool stuff.
          Studying Computer science and application development in Malmö Sweden,
          graduating summer 2021. Specializing in frontend development.{" "}
        </p>
      </div>
      <div className={styles.subContainer}>
        <h3 className={styles.header}>What skills I have</h3>
        <div>
          <Bubble label="Java" />
          <Bubble label="Java Script" />
          <Bubble label="React" />
          <Bubble label="React Native" />
          <Bubble label="ios" />
          <Bubble label="Github" />
          <Bubble label="Git" />
          <Bubble label="Agile development" />
        </div>
      </div>
      <div className={styles.logo}>
        <Background />
      </div>
    </div>
  );
}
