import styles from "./index.module.css";
export function Bubble({ label }) {
  return (
    <div className={styles.bubble}>
      <p className={styles.blue}>{label}</p>
    </div>
  );
}
