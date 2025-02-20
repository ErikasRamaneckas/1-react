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
    <>
      <label
        htmlFor="taskCompleted"
        className="mr-6 text-xl cursor-pointer"
      >
        <input
          id="taskCompleted"
          name="taskCompleted"
          className="accent-sky-500 hover:accent-sky-600 mr-1"
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
    </>
  );
}
