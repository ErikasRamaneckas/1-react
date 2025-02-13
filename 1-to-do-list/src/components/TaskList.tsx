import TaskItem from './TaskItem.tsx';

export default function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo,
}: {
  todos: Todo[];
  onChangeTodo: ChangeTodo;
  onDeleteTodo: DeleteTodo;
}) {
  return (
    <>
      <ul>
        {todos.map((todo: Todo) => (
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
