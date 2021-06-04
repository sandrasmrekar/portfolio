import styles from "./index.module.css";

export default function SideText({ label }) {
  return (
    <div className={styles.container}>
      <div className={styles.bar} />
      <p className={styles.text}>{label}</p>
    </div>
  );
}
