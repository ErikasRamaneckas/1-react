import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm.tsx';
import TaskList from './components/TaskList.tsx';

const initialTodos: Todo[] = [
  { id: crypto.randomUUID(), title: 'Buy milk', completed: true },
  { id: crypto.randomUUID(), title: 'Eat tacos', completed: true },
  { id: crypto.randomUUID(), title: 'Brew tea', completed: false },
];

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  function handleAddTodo(title: string): void {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title: title,
        completed: false,
      },
    ]);
  }

  function handleChangeTodo(updatedTodo: Todo): void {
    setTodos(
      todos.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        } else {
          return todo;
        }
      })
    );
  }

  function handleDeleteTodo(todoId: string): void {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <div className="flex flex-col items-center justify-start">
      <h1 className="text-6xl my-10">To-Do List</h1>
      <TaskForm onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}
