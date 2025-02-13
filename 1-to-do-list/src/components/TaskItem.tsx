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
    <label>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => {
          onChange({ ...todo, done: e.target.checked });
        }}
      />
      {todo.title}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </label>
  );
}
