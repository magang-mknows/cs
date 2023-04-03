import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "@/layouts/auth";
import { BaseLayout } from "@/layouts/base";

const HomePages = lazy(() => import("@/pages/home"));
const LoginPages = lazy(() => import("@/pages/auth/login"));
const RequestPages = lazy(() => import("@/pages/request"));

export const routes = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: (
          <Suspense fallback="loading...">
            <LoginPages />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback="loading...">
            <HomePages />
          </Suspense>
        ),
      },
      {
        path: "/user",
        element: <div>Ini halaman user</div>,
      },
      {
        path: "/permintaan",
        element: (
          <Suspense fallback="loading...">
            <RequestPages />
          </Suspense>
        ),
      },
      {
        path: "/laporan",
        element: <div>Ini halaman laporan</div>,
      },
      {
        path: "/kuota",
        element: <div>Ini halaman kuota</div>,
      },
    ],
  },
]);
