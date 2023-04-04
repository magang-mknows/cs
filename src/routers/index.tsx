import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "@/layouts/auth";
import { BaseLayout } from "@/layouts/base";
import SuspenseError from "@/modules/common/suspense-error";

import { BaseLayoutSkeleton } from "@/layouts/base/base-skeleton";
import { ErrorHome } from "@/modules/home/error-home";

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
          <SuspenseError loading={"..ini loading"} error={"..ini error"}>
            <LoginPages />
          </SuspenseError>
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
          <SuspenseError loading={BaseLayoutSkeleton} error={ErrorHome}>
            <HomePages />
          </SuspenseError>
        ),
      },
      {
        path: "/user",
        element: <div>Ini halaman user</div>,
      },
      {
        path: "/permintaan",
        element: (
          <SuspenseError loading={"..ini loading"} error={"..ini error"}>
            <RequestPages />
          </SuspenseError>
        ),
        children: [
          {
            path: "/permintaan/process",
            element: <div></div>,
          },
        ],
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
