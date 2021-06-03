import { ReactComponent as EmailSvg } from "../../assets/svg/email.svg";
import { ReactComponent as GithubSvg } from "../../assets/svg/github.svg";
import { ReactComponent as LinkedInSvg } from "../../assets/svg/linkedIn.svg";
import styles from "./index.module.css";

export default function LinkIcons() {
  return (
    <div className={styles.container}>
      <EmailSvg className={styles.icon} />
      <GithubSvg className={styles.icon} />
      <LinkedInSvg className={styles.icon} />
    </div>
  );
}
