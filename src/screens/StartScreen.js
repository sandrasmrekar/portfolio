/**
 * This is the landing screen.
 */

import LinkIcons from "../components/LinkIcons";
import styles from "./StartScreen.module.css";

export default function StartScreen() {
  return (
    <div id="StartSection" className={styles.container}>
      <div className={styles.background} />
      <div className={styles.titleContainer}>
        <p>Hi I'm </p>
        <h1>SANDRA SMREKAR</h1>
        <h2>A frontend developer</h2>
        <h4>
          I am a software engineer with passion for coding and learning new
          things.
        </h4>
      </div>
      <LinkIcons />
    </div>
  );
}
