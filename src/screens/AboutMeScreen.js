import SideText from "../components/SideText";
import styles from "./AboutMeScreen.module.css";
import { ReactComponent as ReactIcon } from "../assets/svg/react.svg";
import { ReactComponent as JavaIcon } from "../assets/svg/java.svg";
import { ReactComponent as CsharpIcon } from "../assets/svg/csharp.svg";
import { ReactComponent as JavascriptIcon } from "../assets/svg/javascript.svg";

export default function AboutMeScreen() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <SideText label="about me" style={{ left: "-50px", top: "120px" }} />
        <div className={styles.textContainer}>
          <h3 className={styles.title}>Looking for an awesome collegue</h3>
          <p className={styles.p}>
            Software engineer with a lot of passion for building cool stuff.
            Just graduated from Malmö Sweden, majoring in Computer science and
            application development. Specializing in front end development{" "}
          </p>
        </div>
      </div>
      <div className={styles.skillsContainer}>
        <SideText label="skills" style={{ left: "-90px", top: "40px" }} />
        <h3>Skills</h3>
        <div className={styles.iconContainer}>
          <ReactIcon className={styles.icon} />
          <div className={styles.bar} />
          <JavascriptIcon className={styles.icon} />
          <div className={styles.bar} />
          <JavaIcon className={styles.icon} />
          <div className={styles.bar} />
          <CsharpIcon className={styles.icon} />
        </div>
      </div>
    </div>
  );
}
