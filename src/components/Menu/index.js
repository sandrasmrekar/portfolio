import { createContext, useContext, useState } from "react";
import styles from "./index.module.css";

const MenuContext = createContext();

export default function Menu({ value, onChange, children }) {
  const [show, setShow] = useState(false);

  const handleHamburgerClick = () => {
    setShow((prev) => !prev);
  };
  const handleOnChange = (value) => {
    if (onChange) {
      onChange(value);
    }
  };
  return (
    <div>
      <div onClick={handleHamburgerClick} className={styles.hamburger}>
        <div className={show ? styles.open : ""} id={styles.navicon3}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={show ? styles.containerShow : styles.containerHide}>
        <MenuContext.Provider value={{ value, handleOnChange }}>
          <div className={styles.menuItemContainer}>{children}</div>
        </MenuContext.Provider>
      </div>
    </div>
  );
}

function Item({ label, value }) {
  const menu = useContext(MenuContext);
  const handlePress = () => {
    menu.handleOnChange(value);
  };

  return (
    <div className={styles.menuItem} onClick={handlePress}>
      {value === menu.value ? (
        <div className={styles.barActive} />
      ) : (
        <div className={styles.bar} />
      )}
      {value === menu.value ? (
        <h3 className={styles.textActive}>{label}</h3>
      ) : (
        <h4 className={styles.text}>{label}</h4>
      )}
    </div>
  );
}

Menu.Item = Item;
