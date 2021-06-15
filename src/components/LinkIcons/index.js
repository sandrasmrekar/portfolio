import { ReactComponent as EmailSvg } from "../../assets/svg/email.svg";
import { ReactComponent as GithubSvg } from "../../assets/svg/github.svg";
import { ReactComponent as LinkedInSvg } from "../../assets/svg/linkedIn.svg";
import styles from "./index.module.css";

export default function LinkIcons() {
  return (
    <div id="links" className={styles.container}>
      <a href=" ">
        <EmailSvg className={styles.icon} />
      </a>
      <a href="https://github.com/sandrasmrekar">
        <GithubSvg className={styles.icon} />
      </a>
      <a href="https://www.linkedin.com/in/sandrasmrekar/">
        <LinkedInSvg className={styles.icon} />
      </a>
    </div>
  );
}
