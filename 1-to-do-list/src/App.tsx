import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm.tsx';
import TaskList from './components/TaskList.tsx';

const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: true },
  { id: 2, title: 'Brew tea', done: false },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }

  return (
    <>
      <TaskForm />
      <TaskList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </>
  );
}

export default App;
