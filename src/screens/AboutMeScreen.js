import SideText from "../components/SideText";
import styles from "./AboutMeScreen.module.css";
import { ReactComponent as ReactIcon } from "../assets/svg/react.svg";
import { ReactComponent as JavaIcon } from "../assets/svg/java.svg";
import { ReactComponent as JavascriptIcon } from "../assets/svg/javascript.svg";
import { ReactComponent as DatabaseIcon } from "../assets/svg/database.svg";
import { ReactComponent as AgileIcon } from "../assets/svg/agile.svg";
import { ReactComponent as GitIcon } from "../assets/svg/git.svg";
import { ABOUT_ME_SECTION } from "../constants/sections";

// TODO: Clean up code, structure it better

function LogoItem({ children, title, text, noBar }) {
  return (
    <div className={styles.iconItem}>
      <div>
        {children}
        {!noBar && <div className={styles.bar} />}
      </div>
      <div className={styles.iconItemText}>
        <h4>{title}</h4>
        <p className={styles.p}>{text}</p>
      </div>
    </div>
  );
}

// TODO dele upp i fler functioner eller komponenter
export default function AboutMeScreen() {
  const javaText =
    "Java was the starting point of my software developer career. I utilized java for many of my school projects, from building smaller programs to larger desktop applications. Used (critital thinking skills) and object oriented programming aspects to build awesome applications...read more about dss ";
  const javascriptText =
    "Java Script along with HTML and CSS, opened my eyes for web development. I integrated various open source API's to build scool projects... With CSS (skills) I applied styles.. responsive user interface..bootstrap";
  const reactText =
    "It started with a school project, where React became a favourable java script framework for building highly responsive web based user interfaces by implementing React concepts.";
  const reactNativeText =
    "After exploring web development, mobile development was next on the list I wanted to learn. I got an amazing opportunity to learn the fundamentals of React Native at an internship";
  const databaseText =
    "Though i mostly specialités in frontens development, learing and understa dyning back end development has been an importstopp part for building imperativet and complete projects. Ser my e Vimmerby project to learn more how i user Merkel stack to build the website .";
  const githubText =
    "Github has been the main source version management tool that i have used for my projects. Link to my hub.";
  const agileDevText =
    "Agile development is an iterative approach to project management and software development.. that I implemented in the majority of my projects..scrumm successfull..";
  return (
    <div id={ABOUT_ME_SECTION} className={styles.container}>
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
      <div className={styles.subContainer}>
        <div className={styles.skillsContainer}>
          <SideText label="skills" style={{ left: "-90px", top: "40px" }} />
          <h3>Skills</h3>
          <div className={styles.iconContainer}>
            <LogoItem title="Java" text={javaText}>
              <JavaIcon className={styles.icon} />
            </LogoItem>
            <LogoItem title="Java Script" text={javascriptText}>
              <JavascriptIcon className={styles.icon} />
            </LogoItem>
            <LogoItem title="React" text={reactText}>
              <ReactIcon className={styles.icon} />
            </LogoItem>
            <LogoItem title="React Native" text={reactNativeText}>
              <ReactIcon className={styles.icon} />
            </LogoItem>
          </div>
        </div>

        <div className={styles.skillsContainer}>
          <SideText label="skills" style={{ left: "-90px", top: "40px" }} />
          <h3>Additional knowledge</h3>
          <div className={styles.iconContainer}>
            <LogoItem title="Agile development" text={agileDevText}>
              <AgileIcon className={styles.icon} />
            </LogoItem>
            <LogoItem title="Git" text={githubText}>
              <GitIcon className={styles.icon} />
            </LogoItem>
            <LogoItem title="Database" text={databaseText} noBar>
              <DatabaseIcon className={styles.icon} />
            </LogoItem>
          </div>
        </div>
      </div>
    </div>
  );
}
