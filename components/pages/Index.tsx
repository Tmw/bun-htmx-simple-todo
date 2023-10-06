import * as elements from "typed-html";

import type { Todo } from "../../data/types";
import { TodoList } from "./../TodoList";

interface Props {
  todos: Todo[];
}

export function Index({ todos }: Props) {
  return (
    <div class="w-full h-full bg-gradient-to-b from-indigo-100 to-indigo-200 flex flex-col">
      {/* navigation */}
      <div class="bg-indigo-400 w-full py-5 px-4">
        <h1 class="text-indigo-200 text-2xl">todoist</h1>
      </div>

      {/* main content wrapper */}
      <div class="flex-grow w-full">
        <TodoList todos={todos} />
      </div>
    </div>
  );
}
