import { WORK_SECTION } from "../constants/sections";
import styles from "./WorkScreen.module.css";
// TODO: Visa projekt på ett snyggt sätt, kanske bildspel eller använda nummer sidomenu som finns på figma.
export default function WorkScreen() {
  return (
    <div id={WORK_SECTION} className={styles.container}>
      SHOW PROJECTS
    </div>
  );
}
