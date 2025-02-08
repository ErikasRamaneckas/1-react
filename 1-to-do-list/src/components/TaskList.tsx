import TaskItem from './TaskItem.tsx';

export default function TaskList({ todos, onDeleteTodo }) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TaskItem todo={todo} onDelete={onDeleteTodo} />
          </li>
        ))}
      </ul>
    </>
  );
}
