import { ReactComponent as DeleteSVG } from "../../assets/svg/delete.svg";
import styles from "./index.module.css";

export default function DeleteButton({ onClick }) {
  return <DeleteSVG className={styles.icon} onClick={onClick} />;
}
