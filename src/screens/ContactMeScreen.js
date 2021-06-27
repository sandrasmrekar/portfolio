import emailjs from "emailjs-com";
import { useState } from "react";
import Notification from "../components/Notification";
import styles from "./ContactMeScreen.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CONTACT_SECTION } from "../constants/sections";

const validation = Yup.object().shape({
  from_name: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
  reply_to: Yup.string().email("Invalid email").required("Required"),
});

export default function ConatctMeScreen() {
  const [isError, setIsError] = useState(false);
  const [show, setShow] = useState(false);

  const notificationText = !isError
    ? " Yey! 🙌 Thank you for your email. I will get back to you as soon as possible."
    : "Opps... something went wrong";

  const handleCloseNotification = () => {
    setShow(false);
  };

  const handleSubmit = (values) => {
    // TODOD: make as a service file

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        values,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          setIsError(false);
          setShow(true);
          formik.setSubmitting(false);
          formik.resetForm();
        },
        (error) => {
          setIsError(true);
          setShow(true);
          formik.setSubmitting(false);
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
    },
  });
  return (
    <div id={CONTACT_SECTION} className={styles.container}>
      <Notification
        show={show}
        onClose={handleCloseNotification}
        message={notificationText}
      />
      <h1>Contact me</h1>
      <p>
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
          {formik.isSubmitting ? "Sending..." : "SEND EMAIL"}
        </button>
      </form>
    </div>
  );
}
