/**
 * This is the landing screen.
 */

import { useEffect, useState } from "react";
import LinkIcons from "../components/LinkIcons";
import { START_SECTION } from "../constants/sections";
import styles from "./StartScreen.module.css";

export default function StartScreen() {
  const [y, setY] = useState(window.scrollY);
  const backgroundElement = document.getElementById("background");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = (e) => {
    if (y > window.scrollY && window.scrollY < 40) {
      // Scrolling upp
      backgroundElement.style.right = "0px";
      backgroundElement.style.left = "0px";
      backgroundElement.style.top = "0px";
      backgroundElement.style.bottom = "0px";
    } else if (y < window.scrollY && window.scrollY > 20) {
      // Scrolling down
      backgroundElement.style.right = "50px";
      backgroundElement.style.left = "50px";
      backgroundElement.style.top = "50px";
      backgroundElement.style.bottom = "50px";
    }
    setY(window.scrollY);
  };
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
