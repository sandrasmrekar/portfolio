import React from 'react';
import styles from "./index.module.css";

export default function DeleteButton({ onClick }) {
  return <div className={styles.icon} onClick={onClick} data-testid="toggle">X</div>;
}