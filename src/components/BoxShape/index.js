import styles from "./index.module.css";

export default function BoxShape({ children }) {
  return (
    <div className={styles.boxContainer}>
      <div className={styles.line} />
      <div className={styles.middle}>
        <div className={styles.center}>{children}</div>
      </div>
      <div className={styles.line} />
    </div>
  );
}
