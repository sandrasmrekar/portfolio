import styles from "./index.module.css";

export default function SideText({ label, style }) {
  return (
    <div className={styles.container} style={{ ...style }}>
      <div className={styles.bar} />
      <p className={styles.text}>{label}</p>
    </div>
  );
}
