import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { router } from "./routes";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 4, //default 3
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // delay beetwen request 1s 2s 4s
    },
  },
});

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}></RouterProvider>
  </QueryClientProvider>,
);
