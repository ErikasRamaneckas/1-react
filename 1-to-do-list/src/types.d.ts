export {};

declare global {
  type Todo = {
    id: string;
    title: string;
    completed: boolean;
  };

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
