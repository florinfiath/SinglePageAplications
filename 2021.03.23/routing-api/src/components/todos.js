import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTodos } from "../api";

const Todos = () => {
  const [state, setState] = useState({ todos: [] });

  const { id } = useParams();
  useEffect(() => {
    getTodos(id).then((data) => {
      setState({ todos: data });
    });
  }, []);
  return (
    <ul>
      {state.todos.filter(todo => todo.completed).map(todo =>
        <li key={todo.id}>
          UserId {todo.userId}
          <p>
            {todo.title}
            <strong>{todo.completed ? "Done" : "Not Yet"}</strong>
          </p>
        </li>
      )}

      {state.todos.filter(todo => !todo.completed).map(todo =>
        <li key={todo.id}>
          UserId {todo.userId}
          <p>
            {todo.title}
            <strong>{todo.completed ? "Done" : "Not Yet"}</strong>
          </p>
        </li>
      )}
    </ul>
  );
};

export default Todos;
