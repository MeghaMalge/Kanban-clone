import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { dummyProjects } from "../../dummyData";
import TodosList from "../Todos/TodosList";

import styles from "./TodosContainer.module.css";

export default function TodosContainer() {
  const [notStartedTodos, setNotStartedTodos] = useState(
    dummyProjects[0].toDos.filter((todo) => todo.status === "not started")
  );
  const [startedTodos, setStartedTodos] = useState(
    dummyProjects[0].toDos.filter((todo) => todo.status === "started")
  );
  const [completedTodos, setCompletedTodos] = useState(
    dummyProjects[0].toDos.filter((todo) => todo.status === "completed")
  );
  
  return (
    <DragDropContext>
      <div className={styles.todosContainer}>
        <TodosList todosList={notStartedTodos} type="not-started" />
        <TodosList todosList={startedTodos} type="started" />
        <TodosList todosList={completedTodos} type="completed" />
      </div>
    </DragDropContext>
  );
}
