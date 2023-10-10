import { expect, test } from "bun:test";
import { InMemoryTodoStore } from "./store";

test("creating new todo", () => {
  const store = new InMemoryTodoStore();

  store.create("first");
  expect(store.list().length).toEqual(1);

  store.create("second");
  expect(store.list().length).toEqual(2);
});

test("listing all todos", () => {
  const store = new InMemoryTodoStore();
  const num = 10;

  for (let i = 0; i < num; i++) {
    store.create(`todo_${i}`);
  }

  const result = store.list();
  expect(result).toHaveLength(num);
  for (let i = 0; i < num; i++) {
    expect(result[i].title).toEqual(`todo_${i}`);
  }
});

test("delete todo", () => {
  const store = new InMemoryTodoStore();
  store.create("todo_one");
  store.create("todo_two");
  store.create("todo_three");

  const list = store.list();
  expect(list).toHaveLength(3);

  store.delete(list[1].id);
  expect(store.list()).toHaveLength(2);

  const ids = store.list().map((t) => t.id);
  expect(ids).toEqual([1, 3]);
});

test("toggle todo", () => {
  const store = new InMemoryTodoStore();
  store.create("todo_one");
  store.create("todo_two");
  store.create("todo_three");

  const list = store.list();
  store.toggle(list[1].id);

  const results = store.list().map((t) => [t.id, t.completedAt !== undefined]);
  expect(results).toEqual([
    [1, false],
    [2, true],
    [3, false],
  ]);
});
