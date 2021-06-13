import emailjs from "emailjs-com";
import { useState } from "react";
import styles from "./ContactMeScreen.module.css";

export default function ConatctMeScreen() {
  const [from_name, setName] = useState("");
  const [reply_to, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    const toSend = {
      from_name,
      to_name: "Sandra",
      message,
      reply_to,
    };

    // TODOD: make as a service file
    emailjs
      .send(
        "service_1998",
        "template_bs72nbs",
        toSend,
        "user_DLUwt23xcLcD6bRCXfOEw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.container}>
      <h3>Contact me</h3>
      <p className={styles.p}>
        I would love to here from you and tell more about myself and my journey.
        Send me an email down below.
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.formInput}>
          <label for="from_name">NAME</label>
          <input
            id="from_name"
            type="text"
            value={from_name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.formInput}>
          <label for="reply_to">EMAIL</label>
          <input
            id="reply_to"
            type="reply_to"
            value={reply_to}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.formInput}>
          <label for="message">MESSAGE</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.sendBtn}>
          SEND EMAIL
        </button>
      </form>
    </div>
  );
}
