import Link from "next/link";
import styles from "./index.module.css";
import A from "../components/A";
import MainContainer from "../components/MainContainer";
import Card from "../components/Card";

const index = ({ posts, users }) => {
  console.log(posts);
  console.log(users[0]);
  return (
    <div>
      <MainContainer keywords="Посты">
        <h1>Посты</h1>
        <ul>
          {posts.map((post) => (
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
