import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ErrorHome } from "@/modules/home/error-home";
import { AuthLayout } from "@/layouts/auth";

const HomePages = lazy(() => import("@/pages/home"));
const LoginPages = lazy(() => import("@/pages/auth/login"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePages />,
    errorElement: <ErrorHome />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <LoginPages />,
      },
    ],
  },
]);
