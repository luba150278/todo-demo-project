import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { ITodo } from './interfaces';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  // eslint-disable-next-line no-console
  const assHandler = (title: string): void => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={assHandler} />

        <TodoList todos={todos} />
      </div>
    </>
  );
};

export default App;
