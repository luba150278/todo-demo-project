import React from 'react';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';

const App: React.FC = () => (
  <>
    <Navbar />
    <div className="container">
      <TodoForm />
    </div>
  </>
);

export default App;
