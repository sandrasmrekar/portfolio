import { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function Hamburger({ open }) {
  const [y, setY] = useState(window.scrollY);
  const hamburger = document.getElementById(styles.navicon3);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = (e) => {
    if (y > window.scrollY && window.scrollY < 40 && hamburger) {
      // Scrolling upp
      hamburger.style.right = "10px";
      hamburger.style.transitionDuration = "300ms";
    } else if (y < window.scrollY && window.scrollY > 20 && hamburger) {
      // Scrolling down
      hamburger.style.right = "50%";
      hamburger.style.transitionDuration = "300ms";
    }
    setY(window.scrollY);
  };
  return (
    <div className={open ? styles.open : ""} id={styles.navicon3}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
