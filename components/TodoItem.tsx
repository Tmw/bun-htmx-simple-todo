import * as elements from "typed-html";
import type { Todo } from "../data/types";

interface Props {
  todo: Todo;
}

function BinIcon() {
  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  `;
}

export function TodoItem({ todo }: Props) {
  const todoCompleted = todo.completedAt !== undefined;
  return (
    <div
      id="row-{todo.id}"
      class="bg-indigo-50 rounded-s p-4 my-2 shadow-sm hover:scale-105 transition-all hover:shadow-md flex cursor-pointer group/item"
      hx-put="/todos/{{.ID}}/toggle"
      hx-swap="outerHTML"
      hx-target="#todo-list"
    >
      {todoCompleted ? (
        <div class="flex-grow flex gap-4 flex-row items-center">
          {" "}
          <input type="checkbox" checked="checked" class="w-6 h-6" />
          <span class="text-xl line-through">{todo.title}</span>
        </div>
      ) : (
        <div class="flex-grow flex gap-4 flex-row items-center">
          <input type="checkbox" class="w-6 h-6" />
          <span class="text-xl">{todo.title}</span>
        </div>
      )}

      <button
        class="invisible group-hover/item:visible"
        hx-delete="/todos/{{.ID}}"
        hx-swap="outerHTML"
        hx-target="#todo-list"
        hx-trigger="click consume"
      >
        <BinIcon />
      </button>
    </div>
  );
}
