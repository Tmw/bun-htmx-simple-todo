import * as elements from "typed-html";
import type { Todo } from "../data/types";
import { TodoItem } from "./TodoItem";

interface Props {
  todos: Todo[];
}

export function TodoList({ todos }: Props) {
  const todosDone = todos.filter((t) => t.completedAt !== undefined);
  const todosOpen = todos.filter((t) => t.completedAt === undefined);
  const todosDoneCount = todosDone.length;

  return (
    <div
      id="todo-list"
      class="h-full flex flex-col justify-center items-center"
    >
      <div id="new-todo" class="w-2/3">
        <div class="p-0 my-0 flex flex-row">
          <form
            hx-post="/todos"
            hx-swap="outerHTML"
            hx-target="#todo-list"
            class="w-full p-0 m-0"
          >
            <input
              type="text"
              name="todo"
              class="w-full bg-indigo-50 p-4 rounded-s shadow-sm"
              placeholder="your new todo here"
              autofocus="autofocus"
            />
          </form>
        </div>
      </div>
      <div id="todos-open" class="w-2/3">
        {todosOpen.map((t) => (
          <TodoItem todo={t} />
        ))}
      </div>

      {todosDoneCount > 0 && (
        <div class="w-2/3 relative flex justify-center">
          <div class="absolute w-full top-1/2 border-b border-b-indigo-300"></div>
          <div class="bg-indigo-300 z-10 w-fit rounded-full py-1 px-4 text-xs text-white uppercase">
            {todosDoneCount} done
          </div>
        </div>
      )}

      <div id="todos-done" class="w-2/3">
        {todosDone.map((t) => (
          <TodoItem todo={t} />
        ))}
      </div>
    </div>
  );
}
