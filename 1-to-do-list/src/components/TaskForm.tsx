import { useState } from 'react';

export default function TaskForm({
  onAddTodo,
}: {
  onAddTodo: AddTodo;
}) {
  const [title, setTitle] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onAddTodo(title);
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        minLength={3}
        maxLength={256}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}
