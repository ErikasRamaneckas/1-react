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
    <form
      className="mb-5 flex justify-between"
      onSubmit={handleSubmit}
    >
      <label className="font-sans text-gray-700" htmlFor="">
        Task title:{' '}
        <input
          className="caret-sky-600 bg-gray-100 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-3xs mr-5"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          minLength={3}
          maxLength={256}
          required
        />
      </label>
      <button
        className="bg-sky-500 text-white rounded-md px-5 transition-colors duration-200 hover:bg-sky-600 cursor-pointer"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}
