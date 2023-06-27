import React from "react";
import styles from "../styles/Card.module.scss";
import { CheckBox } from "./Checkbox";

const Card = ({ title, text, user }) => {
  return (
    <>
      <li className={styles.card}>
        {user && <h2 className={styles.title}>{user}</h2>}
        {title && <h2 className={styles.title}>{title}</h2>}
        {text && <h2 className={styles.text}>{text}</h2>}

        <footer className={styles.footer}>
          <div className={styles.icons}>
            <button className={styles.button}>кнопка</button>
          </div>
          <CheckBox />
        </footer>
      </li>
    </>
  );
};

export default Card;
