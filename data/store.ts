import { Todo } from "../data/types";

export class InMemoryTodoStore {
  private todos: Todo[] = [];

  constructor() {
    this.create("test");
    this.create("first", true);
    this.create("second");
  }

  create(title: string, completed?: boolean) {
    const todo = {
      title,
      createdAt: new Date(),
      completedAt: completed ? new Date() : undefined,
    };

    this.add(todo);

    return {
      title: todo.title,
      done: false,
    };
  }

  add(todo: Todo) {
    this.todos.push(todo);
  }

  list() {
    return this.todos;
  }
}
