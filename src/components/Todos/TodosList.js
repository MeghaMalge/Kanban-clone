import { Bullet } from "../../assets/icons/Bullet";
import { AddSquare } from "../../assets/icons/AddSquare";
import TodoItem from "./TodoItem";

import styles from "./TodosList.module.css";

export default function TodosList({ todosList, type }) {
  return (
    <div className={styles.todosContainer}>
      <header
        className={`${styles.todoHeader} ${
          type === "not-started"
            ? styles.notStarted
            : type === "started"
            ? styles.started
            : styles.completed
        }`}
      >
        <Bullet
          color={
            type === "not-started"
              ? "#5030E5"
              : type === "started"
              ? "#FFA500"
              : "#76A5EA"
          }
        />
        <span>
          {type === "not-started"
            ? "To Do"
            : type === "started"
            ? "On Progress"
            : "Done"}
        </span>
        <span className={styles.count}>{todosList.length}</span>
        {type === "not-started" && (
          <span className={styles.addTodoButton}>
            <AddSquare />
          </span>
        )}
      </header>

      {todosList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
