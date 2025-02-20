export {};

declare global {
  type Todo = {
    id: string;
    title: string;
    completed: boolean;
  };

  type TaskFormProps = {
    onAddTodo: AddTodo;
  };

  type TaskListProps = {
    todos: Todo[];
    onChangeTodo: ChangeTodo;
    onDeleteTodo: DeleteTodo;
  };

  type TaskItemProps = {
    todo: Todo;
    onChange: ChangeTodo;
    onDelete: DeleteTodo;
  };

  interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
    type?: 'button' | 'submit';
  }

  type AddTodo = {
    (title: string): void;
  };

  type ChangeTodo = {
    (nextTodo: Todo): void;
  };

  type DeleteTodo = {
    (id: string): void;
  };
}
