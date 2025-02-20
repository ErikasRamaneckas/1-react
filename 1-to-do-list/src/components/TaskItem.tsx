import Button from './Button';

export default function TaskItem({
  todo,
  onChange,
  onDelete,
}: TaskItemProps) {
  return (
    <>
      <input
        id={todo.id}
        name="taskCompleted"
        className="accent-sky-500 hover:accent-sky-600 mr-1"
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => {
          onChange({ ...todo, completed: e.target.checked });
        }}
      />
      <label
        htmlFor={todo.id}
        className="mr-6 text-xl cursor-pointer"
      >
        {todo.title}
      </label>
      <Button
        onClick={() => onDelete(todo.id)}
        children="Delete"
        className="bg-red-500 hover:bg-red-600"
      />
    </>
  );
}
