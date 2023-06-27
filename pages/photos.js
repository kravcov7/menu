import { useEffect, useState } from "react";
import styles from "../styles/user.module.scss";

import MainContainer from "../components/MainContainer";

const Photos = ({ albums }) => {
    console.log(albums)
  return (
    <MainContainer keywords='Фото'>
      <div className={styles.userd}>
        <h1 className={styles.userdf}>Фото</h1>
        <ul>
          {albums.map((user) => (
            <li key={user.id}>{user.title}</li>
          ))}
        </ul>
      </div>
    </MainContainer>
  );
};

export default Photos;

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/albums`);
  const albums = await response.json();


  return {
    props: { albums }, // will be passed to the page component as props
  };
}
