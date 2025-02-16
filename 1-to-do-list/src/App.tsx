import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm.tsx';
import TaskList from './components/TaskList.tsx';

let nextId = 3;
const initialTodos: Todo[] = [
  { id: 0, title: 'Buy milk', completed: true },
  { id: 1, title: 'Eat tacos', completed: true },
  { id: 2, title: 'Brew tea', completed: false },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  function handleDeleteTodo(todoId: number) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }

  function handleChangeTodo(nextTodo: Todo) {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  }

  function handleAddTodo(title: string) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        completed: false,
      },
    ]);
  }

  return (
    <>
      <h1 className="text-7xl mb-10">To-Do List</h1>
      <TaskForm onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default App;
