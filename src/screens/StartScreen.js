/**
 * This is the landing screen.
 */

import { useEffect, useState } from "react";
import LinkIcons from "../components/LinkIcons";
import { START_SECTION } from "../constants/sections";
import styles from "./StartScreen.module.css";

export default function StartScreen() {
  const linksElement = document.getElementById("links");
  const [y, setY] = useState(window.scrollY);
  const [classNameBackground, setClassNameBackground] = useState(
    styles.background
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = (e) => {
    if (y > window.scrollY && window.scrollY < 40 && linksElement) {
      // Scrolling upp
      setClassNameBackground(styles.background);
      linksElement.style.right = "40px";
      linksElement.style.bottom = "40px";
    } else if (y < window.scrollY && window.scrollY > 20 && linksElement) {
      // Scrolling down
      setClassNameBackground(styles.backgroundScroll);
      linksElement.style.right = "60px";
      linksElement.style.bottom = "70px";
    }
    setY(window.scrollY);
  };

  return (
    <div id={START_SECTION} className={styles.container}>
      <div className={classNameBackground} />
      <div className={styles.titleContainer}>
        <p className={styles.blue}>Hi I'm </p>
        <h1 className={styles.white}>SANDRA SMREKAR</h1>
        <h2 className={styles.grey}>A frontend developer</h2>
        <h4 className={styles.text}>
          I am a software engineer with passion for coding and learning new
          things.
        </h4>
      </div>
      <LinkIcons />
    </div>
  );
}
