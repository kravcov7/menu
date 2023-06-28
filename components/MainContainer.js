import Head from "next/head";
import React from "react";
import styles from "../styles/MainContainer.module.scss";
import A from "./A";

const MainContainer = ({ keywords, children }) => {
  return (
    <>
      <Head>
        <title>{keywords}</title>{" "}
      </Head>
      <div className={styles.navbar}>
        <A className={styles.link} href={"/"} text="Посты" />
        <A className={styles.link} href={"/photos"} text="Фото" />
        <A className={styles.link} href={"/tasks"} text="Задачи" />
      </div>
      <div className={styles.main}>{children}</div>
    </>
  );
};

export default MainContainer;
