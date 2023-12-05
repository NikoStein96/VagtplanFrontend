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
import Home from "./pages/Home.tsx";
import MarketingLayout from "./layout/MarketingLayout.tsx";
import Register from "./pages/Register.tsx";
import Organisation from "./pages/Organisation.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MarketingLayout>
        <Home />
      </MarketingLayout>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/organisation",
    element: (
      <Layout>
        <Organisation />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <MarketingLayout>
        <Login />
      </MarketingLayout>
    ),
  },
  {
    path: "/register",
    element: (
      <MarketingLayout>
        <Register />
      </MarketingLayout>
    ),
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
