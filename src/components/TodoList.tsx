import React from 'react';
import { ITodo } from '../interfaces';

type TodoListProps = {
  todos: ITodo[];
  onToggle(id: number): void; // first variant of function/method
  onRemove: (id: number) => void; // second variant - For optional parameters, you can put ? after name of method
};

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  if (todos.length === 0) {
    return <p className="center">Nothing data now!</p>;
  }

  const removeHandler = (event: React.MouseEvent, id: number): void => {
    event.preventDefault();
    onRemove(id);
  };

  return (
    <ul>
      {todos.map((todo) => {
        const classes = ['todo'];
        if (todo.completed) {
          classes.push('completed');
        }

        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={onToggle.bind(null, todo.id)} />
              <span>{todo.title}</span>
              <i className="material-icons red-text" onClick={(event): void => removeHandler(event, todo.id)}>
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
