import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm.tsx';
import TaskList from './components/TaskList.tsx';

let nextId = 3;
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

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  }

  return (
    <>
      <TaskForm onAddToDo={handleAddTodo} />
      <TaskList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </>
  );
}

export default App;
