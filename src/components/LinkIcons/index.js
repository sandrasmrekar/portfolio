import { ReactComponent as EmailSvg } from "../../assets/svg/email.svg";
import { ReactComponent as GithubSvg } from "../../assets/svg/github.svg";
import { ReactComponent as LinkedInSvg } from "../../assets/svg/linkedIn.svg";
import { CONTACT_SECTION } from "../../constants/sections";
import { animateScroll } from "../../services/scrollAnimation";
import styles from "./index.module.css";

export default function LinkIcons() {
  const handleOnClick = () => {
    const target = document.getElementById(CONTACT_SECTION);
    animateScroll({
      targetPosition: target.offsetTop,
      initialPosition: window.scrollY,
      duration: 1500,
    });
  };
  return (
    <div id="links" className={styles.container}>
      <div onClick={handleOnClick}>
        <EmailSvg className={styles.icon} />
      </div>
      <a href="https://github.com/sandrasmrekar">
        <GithubSvg className={styles.icon} />
      </a>
      <a href="https://www.linkedin.com/in/sandrasmrekar/">
        <LinkedInSvg className={styles.icon} />
      </a>
    </div>
  );
}
