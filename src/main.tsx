import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Protected from "./Protected.tsx";
import Layout from "./layout/Layout.tsx";
import Login from "./pages/Login.tsx";
import Schedules from "./pages/Schedules.tsx";
import { QueryClientProvider, QueryClient } from "react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/schedules",
    element: (
      <Layout>
        <Schedules />
      </Layout>
    ),
  },
  {
    path: "/protected",
    element: (
      <Layout>
        <Protected />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
