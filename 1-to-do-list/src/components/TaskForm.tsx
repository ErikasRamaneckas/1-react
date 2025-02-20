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
    <form className="mb-5" onSubmit={handleSubmit}>
      <label className="text-lg" htmlFor="taskTitle">
        Task title:
        <input
          id="taskTitle"
          name="taskTitle"
          className="caret-sky-600 bg-gray-100 border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400 mx-2"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          minLength={3}
          maxLength={256}
          required
        />
      </label>
      <button
        className="bg-sky-500 text-white rounded-md px-6 py-2 transition-colors duration-200 hover:bg-sky-600 cursor-pointer"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}
