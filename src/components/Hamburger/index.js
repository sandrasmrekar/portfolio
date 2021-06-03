import styles from "./index.module.css";

export default function Hamburger({ open }) {
  return (
    <div className={open ? styles.open : ""} id={styles.navicon3}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
