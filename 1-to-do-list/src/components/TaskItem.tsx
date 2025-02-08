export default function TaskItem({ todo, onDelete }) {
  return (
    <>
      {todo.title}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </>
  );
}
