import emailjs from "emailjs-com";
import { useState } from "react";
import DeleteButton from "../components/CloseButton";
import Notification from "../components/Notification";
import styles from "./ContactMeScreen.module.css";

export default function ConatctMeScreen() {
  const [from_name, setFrom_Name] = useState("");
  const [reply_to, setReply_to] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [show, setShow] = useState(false);

  const notificationText = !isError
    ? " Yey! 🙌 Thank you for your email. I will get back to you as soon as possible."
    : "Opps... something went wrong";

  const handleCloseNotification = () => {
    setShow(false);
  };

  const handleClearInputs = () => {
    setFrom_Name("");
    setMessage("");
    setReply_to("");
  };

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
          setIsError(false);
          setShow(true);
          handleClearInputs();
        },
        (error) => {
          setIsError(true);
          setShow(true);
        }
      );
  };

  return (
    <div className={styles.container}>
      <Notification
        show={show}
        onClose={handleCloseNotification}
        message={notificationText}
      />
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
            onChange={(e) => setFrom_Name(e.target.value)}
          />
        </div>
        <div className={styles.formInput}>
          <label for="reply_to">EMAIL</label>
          <input
            id="reply_to"
            type="reply_to"
            value={reply_to}
            onChange={(e) => setReply_to(e.target.value)}
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
