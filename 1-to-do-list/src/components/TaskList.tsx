import TaskItem from './TaskItem';

export default function TaskList({ todos }) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TaskItem todo={todo} />
          </li>
        ))}
      </ul>
    </>
  );
}
