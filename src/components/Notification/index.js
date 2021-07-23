import DeleteButton from "../CloseButton";
import styles from "./index.module.css";
export default function Notification({ show, message, onClose }) {
  return (
    <div className={show ? styles.showNotification : styles.hideNotification}>
      <p className={styles.small}>{message}</p>
      <DeleteButton onClick={onClose} />
    </div>
  );
}
