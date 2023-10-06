import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";

import { Index } from "./components/pages/Index";
import { TodoList } from "./components/TodoList";
import { App } from "./components/layouts/App";
import { InMemoryTodoStore } from "./data/store";

const todoStore = new InMemoryTodoStore();
const registry = {
  todoStore,
} as const;

const main = new Elysia()
  .use(html())
  .decorate(registry)
  .get("/", ({ todoStore }) => (
    <App component={<Index todos={todoStore.list()} />} />
  ))
  .post(
    "/todos",
    ({ body, todoStore }) => {
      todoStore.create(body.todo);
      return <TodoList todos={todoStore.list()} />;
    },
    { body: t.Object({ todo: t.String() }) }
  )
  .listen(8080);

console.log(`listening on: ${main.server?.hostname}:${main.server?.port}`);
