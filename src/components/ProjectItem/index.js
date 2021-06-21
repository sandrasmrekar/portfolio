import styles from "./index.module.css";
// context for counting

export default function ProductItem({ children, linkTo }) {
  return (
    <div className={styles.container}>
      <a href={linkTo}>{children}</a>
    </div>
  );
}

function Header({ label, number }) {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.header}>{number}</h1>
      <h1 className={styles.header}>{label}</h1>
    </div>
  );
}

function SubHeader({ label }) {
  return <h2 className={styles.subHeader}>{label}</h2>;
}

function Text({ text, link }) {
  return (
    <p className={styles.text}>
      {text}
      <a href={link} className={styles.link}>
        View source code
      </a>
    </p>
  );
}

ProductItem.Header = Header;
ProductItem.SubHeader = SubHeader;
ProductItem.Text = Text;
