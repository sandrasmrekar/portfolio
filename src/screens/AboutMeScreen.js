import SideText from "../components/SideText";
import styles from "./AboutMeScreen.module.css";

export default function AboutMeScreen() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <SideText label="about me" />
        <div className={styles.textContainer}>
          <h3 className={styles.title}>Looking for an awesome collegue</h3>
          <p className={styles.p}>
            Software engineer with a lot of passion for building cool stuff.
            Just graduated from Malmö Sweden, majoring in Computer science and
            application development. Specializing in front end development{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
