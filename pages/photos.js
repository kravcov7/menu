import { useEffect, useState } from "react";
import styles from "../styles/user.module.scss";
import Card from "../components/Card";

import MainContainer from "../components/MainContainer";

const Photos = ({ albums, users }) => {
  const [perPage, setPerPage] = useState(10);

  const selectedCountAlbums = albums.slice(0, perPage);

  return (
    <MainContainer keywords="Фото">
      <div className={styles.userd}>
        <h1 className={styles.userdf}>Фото</h1>
        <ul className={styles.container}>
          {selectedCountAlbums.map((album) => (
            <Card key={album.id} user={users[0].username} title={album.title} />
          ))}
        </ul>
      </div>
    </MainContainer>
  );
};

export default Photos;

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/albums`);
  const response2 = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response2.json();
  const albums = await response.json();

  return {
    props: { albums, users }, // will be passed to the page component as props
  };
}
