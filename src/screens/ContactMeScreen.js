import emailjs from "emailjs-com";
import { useState } from "react";
import Notification from "../components/Notification";
import styles from "./ContactMeScreen.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const validation = Yup.object().shape({
  from_name: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
  reply_to: Yup.string().email("Invalid email").required("Required"),
});

export default function ConatctMeScreen() {
  const [isError, setIsError] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const notificationText = !isError
    ? " Yey! 🙌 Thank you for your email. I will get back to you as soon as possible."
    : "Opps... something went wrong";

  const handleCloseNotification = () => {
    setShow(false);
  };

  const handleSubmit = (values) => {
    // TODOD: make as a service file
    setLoading(true);

    emailjs
      .send(
        "service_1998",
        "template_bs72nbs",
        values,
        "user_DLUwt23xcLcD6bRCXfOEw"
      )
      .then(
        (result) => {
          setIsError(false);
          setShow(true);
          setLoading(false);
        },
        (error) => {
          setIsError(true);
          setShow(true);
          setLoading(false);
        }
      );
  };

  const formik = useFormik({
    initialValues: {
      from_name: "",
      to_name: "Sandra",
      message: "",
      reply_to: "",
    },
    validationSchema: validation,
    onSubmit: (values) => {
      handleSubmit(values);
      formik.setValues({
        from_name: "",
        to_name: "Sandra",
        message: "",
        reply_to: "",
      });
    },
  });

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
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.formInput}>
          <label htmlFor="from_name">NAME</label>
          <input
            id="from_name"
            name="from_name"
            type="text"
            value={formik.values.from_name}
            onChange={formik.handleChange}
          />
        </div>
        {formik.errors.from_name && (
          <p className={styles.errorMessage}>{formik.errors.from_name}</p>
        )}
        <div className={styles.formInput}>
          <label htmlFor="reply_to">EMAIL</label>
          <input
            id="reply_to"
            name="reply_to"
            type="reply_to"
            value={formik.values.reply_to}
            onChange={formik.handleChange}
          />
        </div>
        {formik.errors.reply_to && (
          <p className={styles.errorMessage}>{formik.errors.reply_to}</p>
        )}
        <div className={styles.formInput}>
          <label htmlFor="message">MESSAGE</label>
          <textarea
            id="message"
            name="message"
            type="text"
            value={formik.values.message}
            onChange={formik.handleChange}
          />
        </div>
        {formik.errors.message && (
          <p className={styles.errorMessage}>{formik.errors.message}</p>
        )}
        <button type="submit" className={styles.sendBtn}>
          {loading ? "Sending..." : "SEND EMAIL"}
        </button>
      </form>
    </div>
  );
}
