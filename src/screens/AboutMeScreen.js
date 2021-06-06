import SideText from "../components/SideText";
import styles from "./AboutMeScreen.module.css";
import { ReactComponent as ReactIcon } from "../assets/svg/react.svg";
import { ReactComponent as JavaIcon } from "../assets/svg/java.svg";
import { ReactComponent as CsharpIcon } from "../assets/svg/csharp.svg";
import { ReactComponent as JavascriptIcon } from "../assets/svg/javascript.svg";
import { ReactComponent as DatabaseIcon } from "../assets/svg/database.svg";
import { ReactComponent as AgileIcon } from "../assets/svg/agile.svg";
import { ReactComponent as GitIcon } from "../assets/svg/git.svg";

// TODO: Clean up code, structure it better

function LogoItem({ children, title, text, noBar }) {
  return (
    <div className={styles.iconItem}>
      <div>
        {children}
        {!noBar && <div className={styles.bar} />}
      </div>
      <div className={styles.iconItemText}>
        <h3>{title}</h3>
        <p className={styles.p}>{text}</p>
      </div>
    </div>
  );
}

// TODO dele upp i fler functioner eller komponenter
export default function AboutMeScreen() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <SideText label="about me" style={{ left: "-105px", top: "60px" }} />
        <div className={styles.textContainer}>
          <h3 className={styles.title}>Looking for an awesome collegue</h3>
          <p className={styles.p}>
            Software engineer with a lot of passion for building cool stuff.
            Just graduated from Malmö Sweden, majoring in Computer science and
            application development. Specializing in front end development{" "}
          </p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className={styles.skillsContainer}>
          <SideText label="skills" style={{ left: "-90px", top: "40px" }} />
          <h3>Skills</h3>
          <div className={styles.iconContainer}>
            <LogoItem title="React" text="hdhdhdhdhdhdhdh">
              <ReactIcon className={styles.icon} />
            </LogoItem>
            <LogoItem title="Java Script" text="hdhdhdhdhdhdhdh">
              <JavascriptIcon className={styles.icon} />
            </LogoItem>
            <LogoItem title="Java" text="hdhdhdhdhdhdhdh">
              <JavaIcon className={styles.icon} />
            </LogoItem>
            <LogoItem title="C Sharp" text="hdhdhdhdhdhdhdh" noBar>
              <CsharpIcon className={styles.icon} />
            </LogoItem>
          </div>
        </div>

        <div className={styles.skillsContainer}>
          <SideText label="skills" style={{ left: "-90px", top: "40px" }} />
          <h3>Additional knowledge</h3>
          <div className={styles.iconContainer}>
            <LogoItem title="Agile development" text="hdhdhdhdhdhdhdh">
              <AgileIcon className={styles.icon} />
            </LogoItem>
            <LogoItem title="Git" text="hdhdhdhdhdhdhdh">
              <GitIcon className={styles.icon} />
            </LogoItem>
            <LogoItem title="Database" text="hdhdhdhdhdhdhdh" noBar>
              <DatabaseIcon className={styles.icon} />
            </LogoItem>
          </div>
        </div>
      </div>
    </div>
  );
}
