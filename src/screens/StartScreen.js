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
      linksElement.style.right = "8%";
      linksElement.style.bottom = "8%";
    }
    setY(window.scrollY);
  };

  return (
    <section id={START_SECTION} className={styles.container}>
      <div className={classNameBackground} />
      <div className={styles.titleContainer}>
        <p className={styles.blue}>HI I'M SANDRA </p>
        <div className={styles.row}>
          <h1 className={styles.white}>SOFTWARE </h1>
          <h1 className={styles.outline}>ENGINEER</h1>
        </div>
        <h1 className={styles.white}>FOCUSED ON UX AND FRONTEND DEVELOPMENT</h1>
      </div>
      <LinkIcons />
    </section>
  );
}
