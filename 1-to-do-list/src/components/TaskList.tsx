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
    <div>
      <h2 className="text-4xl text-center">Task List</h2>
      <ul>
        {todos.map((todo: Todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between my-3"
          >
            <TaskItem
              todo={todo}
              onChange={onChangeTodo}
              onDelete={onDeleteTodo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
