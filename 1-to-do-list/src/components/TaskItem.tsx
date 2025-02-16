export default function TaskItem({
  todo,
  onChange,
  onDelete,
}: {
  todo: Todo;
  onChange: ChangeTodo;
  onDelete: DeleteTodo;
}) {
  return (
    <div className="my-5 flex justify-between">
      <label className="mr-5 text-xl text-wrap cursor-pointer">
        <input
          className="accent-sky-500 hover:accent-sky-600 mr-1 cursor-pointer"
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => {
            onChange({ ...todo, completed: e.target.checked });
          }}
        />
        {todo.title}
      </label>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md
      transition-colors duration-200 hover:bg-red-600 cursor-pointer"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}
