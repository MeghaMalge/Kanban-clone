import { Menu1 } from "../../assets/icons/Menu1";
import { Message16 } from "../../assets/icons/Message16";
import { Folder } from "../../assets/icons/Folder";
import Users from "../UI/Users";

import styles from "./TodoItem.module.css";

export default function TodoItem({ todo }) {
  return (
    <div className={styles.todo}>
      <header className={styles.todoHeader}>
        <span
          className={`${styles.priority} ${
            todo.priority === "low"
              ? styles.low
              : todo.priority === "high"
              ? styles.high
              : styles.completed
          }`}
        >
          {todo.priority}
        </span>
        <Menu1 />
      </header>
      <main className={styles.todoInfo}>
        <h3 className={styles.todoName}>{todo.title}</h3>
        {todo.description && (
          <p className={styles.todoDescription}>{todo.description}</p>
        )}
        {todo.image.length !== 0 && (
          <div className={styles.images}>
            {todo.image.map((picture) => (
              <img src={`/images/${picture}.png`} alt={picture} />
            ))}
          </div>
        )}
      </main>
      <footer className={styles.footer}>
        <Users
          users={todo.users}
          width="24px"
          height="24px"
          offset="4"
          overlap="right"
        />
        <section className={styles.tagsContainer}>
          <span className={styles.tag}>
            <Message16 />
            {todo.comments + " comments"}
          </span>
          <span className={styles.tag}>
            <Folder />
            {todo.files + " files"}
          </span>
        </section>
      </footer>
    </div>
  );
}
