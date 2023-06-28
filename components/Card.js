import React, { useState } from "react";
import styles from "../styles/Card.module.scss";
import { CheckBox } from "./Checkbox";

const Card = ({ title, text, user, comments }) => {
  const [showComments, setShowComments] = useState(false);

  const handleShowComments = () => {
    setShowComments((prev) => !prev);
  };

  return (
    <>
      <li className={styles.card}>
        <div className={styles.box}>
          {user && <h2 className={styles.title}>Author: {user}</h2>}
          {title && <h4 className={styles.title}>{title}</h4>}
          {text && <h4 className={styles.text}>{text}</h4>}
        </div>
        {comments && showComments && (
          <div className={styles.ff}>
            <ul>
              {comments.map((comment) => (
                <li key={comment.id} className={styles.rr}>
                  {comment.body}
                </li>
              ))}
            </ul>
          </div>
        )}

        <footer className={styles.footer}>
          <div className={styles.icons}>
            <button onClick={handleShowComments} className={styles.button}>
              show
            </button>
            <button className={styles.button}>Edit</button>
            <button className={styles.button}>Delete</button>
            <button className={styles.button}>Like</button>
          </div>
          <CheckBox />
        </footer>
      </li>
    </>
  );
};

export default Card;
