import { useEffect, useState } from "react";
import styles from "../styles/user.module.scss";
import MainContainer from "../components/MainContainer";

const Tasks = ({ todos }) => {
  return (
    <MainContainer keywords="Задачи">
      <div className={styles.userd}>
        <h1 className={styles.userdf}>Задачи</h1>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </MainContainer>
  );
};

export default Tasks;

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const todos = await response.json();

  return {
    props: { todos }, // will be passed to the page component as props
  };
}
