import Link from "next/link";
import styles from "./index.module.css";
import A from "../components/A";
import MainContainer from "../components/MainContainer";
import Card from "../components/Card";
import { useState } from "react";

const index = ({ posts, users }) => {
    const [perPage, setPerPage] = useState(10)

    const handlePerPageChange = event => {
		setPerPage(parseInt(event.target.value))
	}

    const selectedCountPosts = posts.slice(0, perPage)

  return (
    <div>
      <MainContainer keywords="Посты">
        <h1>Посты</h1>
        <label>
				Количество постов на странице: 
				<select value={perPage} onChange={handlePerPageChange}>
					<option value={10}>10</option>
					<option value={20}>20</option>
					<option value={50}>50</option>
					<option value={100}>100</option>
					<option value={posts.length}>Все</option>
				</select>
			</label>
        <ul className={styles.container}>
          {selectedCountPosts.map((post) => (
            <Card key={post.id} user={users[0].username} title={post.title} />
          ))}
        </ul>
      </MainContainer>
    </div>
  );
};

export default index;

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const response2 = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const posts = await response.json();
  const users = await response2.json();

  return {
    props: { posts, users }, // will be passed to the page component as props
  };
}
