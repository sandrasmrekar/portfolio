import { useState } from "react";
import styles from "./ContactMeScreen.module.css";

export default function ConatctMeScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className={styles.container}>
      <h3>Contact me</h3>
      <p className={styles.p}>
        I would love to here from you and tell more about myself and my journey.
        Send me an email down below.
      </p>
      <form>
        <div className={styles.formInput}>
          <label for="name">NAME</label>
          <input id="name" type="text" />
        </div>
        <div className={styles.formInput}>
          <label for="email">EMAIL</label>
          <input id="email" type="email" />
        </div>
        <div className={styles.formInput}>
          <label for="message">MESSAGE</label>
          <textarea id="message" />
        </div>
        <button type="submit" className={styles.sendBtn}>
          SEND EMAIL
        </button>
      </form>
    </div>
  );
}
