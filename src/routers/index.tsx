import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "@/layouts/auth";
import { BaseLayout } from "@/layouts/base";
import Spinner from "@/components/atoms/spinner";
import SuspenseError from "@/modules/common/suspense-error";

import { BaseLayoutSkeleton } from "@/layouts/base/base-skeleton";
import { AuthSkeleton } from "@/layouts/auth/auth-skeleton";
import { ErrorHome } from "@/modules/home/error-home";
import { ErrorLogin } from "@/modules/auth/login/error-login";

const LoginPages = lazy(() => import("@/pages/auth/login"));
const HomePages = lazy(() => import("@/pages/home"));
const UserPages = lazy(() => import("@/pages/user"));
const RequestPages = lazy(() => import("@/pages/request"));

export const routes = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: (
          <SuspenseError loading={<AuthSkeleton />} error={<ErrorLogin />}>
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
          <SuspenseError loading={<BaseLayoutSkeleton />} error={<ErrorHome />}>
            <HomePages />
          </SuspenseError>
        ),
      },
      {
        path: "/user",
        element: (
          <SuspenseError loading={<Spinner />} error={"..ini error"}>
            <UserPages />
          </SuspenseError>
        ),
      },
      {
        path: "/permintaan",
        element: (
          <SuspenseError loading={<Spinner />} error={"..ini error"}>
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
        element: (
          <SuspenseError loading={<Spinner />} error={"..ini error"}>
            <h1>Hallo gays</h1>
          </SuspenseError>
        ),
      },
      {
        path: "/kuota",
        element: <div>Ini halaman kuota</div>,
      },
    ],
  },
]);
