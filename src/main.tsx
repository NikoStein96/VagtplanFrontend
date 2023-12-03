import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout.tsx";
import Login from "./pages/Login.tsx";
import Schedules from "./pages/Schedules.tsx";
import Schedule from "./pages/Schedule.tsx";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

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
    path: "schedules/:id",
    element: (
      <Layout>
        <Schedule />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
