export {};

declare global {
  type Todo = {
    id: number;
    title: string;
    completed: boolean;
  };

  type AddTodo = {
    (title: string): void;
  };

  type ChangeTodo = {
    (nextTodo: ToDo): void;
  };

  type DeleteTodo = {
    (id: number): void;
  };
}
