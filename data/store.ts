import { Todo } from "../data/types";

export class InMemoryTodoStore {
  private counter: number = 1;
  private todos: Todo[] = [];

  constructor() {
    this.create("test");
    this.create("first", true);
    this.create("second");
  }

  create(title: string, completed?: boolean) {
    const todo = {
      id: this.counter++,
      title,
      createdAt: new Date(),
      completedAt: completed ? new Date() : undefined,
    };

    this.add(todo);
  }

  add(todo: Todo) {
    this.todos.push(todo);
  }

  delete(todoId: number) {
    this.todos = this.todos.filter((t) => t.id !== todoId);
  }

  toggle(todoId: number) {
    this.todos = this.todos.map((t) => {
      if (t.id !== todoId) {
        return t;
      }

      if (t.completedAt === undefined) {
        t.completedAt = new Date();
      } else {
        t.completedAt = undefined;
      }

      return t;
    });
  }

  list() {
    return this.todos;
  }
}
