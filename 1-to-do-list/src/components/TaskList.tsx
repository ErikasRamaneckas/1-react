import TaskItem from './TaskItem.tsx';

export default function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo,
}) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TaskItem
              todo={todo}
              onChange={onChangeTodo}
              onDelete={onDeleteTodo}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
