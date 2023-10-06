import * as elements from "typed-html";

interface Props {
  component: JSX.Element;
}

export function App({ component }: Props) {
  return (
    <html>
      <head>
        <title>Todo Example</title>
        <script
          src="https://unpkg.com/htmx.org@1.9.6"
          integrity="sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni"
          crossorigin="anonymous"
        ></script>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <div class="bg-primary-content h-screen">{component}</div>
      </body>
    </html>
  );
}
