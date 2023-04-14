import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "@/layouts/auth";
import { BaseLayout } from "@/layouts/base";
import Spinner from "@/components/atoms/loading/spinner";
import SuspenseError from "@/modules/common/suspense-error";

import { BaseLayoutSkeleton } from "@/layouts/base/base-skeleton";
import { LoadingHome } from "@/modules/home/loading-home";
import { LoadingUser } from "@/modules/user/loading";
import LoadingRequest from "@/modules/request/loading";
import { AuthSkeleton } from "@/layouts/auth/auth-skeleton";
import { ErrorHome } from "@/modules/home/error-home";
import { ErrorModules } from "@/modules/common/errorpage";
import { ErrorLogin } from "@/modules/auth/login/error-login";
import ReportPages from "@/pages/report";
import { LoadingReport } from "@/modules/report/loading";

const LoginPages = lazy(() => import("@/pages/auth/login"));
const HomePages = lazy(() => import("@/pages/home"));
const UserPages = lazy(() => import("@/pages/user"));
const RequestPages = lazy(() => import("@/pages/request"));
const QuotaPages = lazy(() => import("@/pages/quota"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: (
          <SuspenseError loading={<AuthSkeleton />} error={<ErrorLogin />}>
            <LoginPages />
          </SuspenseError>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <SuspenseError loading={<BaseLayoutSkeleton />} error={<ErrorHome />}>
        <BaseLayout />
      </SuspenseError>
    ),
    errorElement: <ErrorModules />,
    children: [
      {
        path: "/dashboard/home",
        element: (
          <SuspenseError loading={<LoadingHome />} error={<ErrorHome />}>
            <HomePages />
          </SuspenseError>
        ),
      },
      {
        path: "/dashboard/user",
        element: (
          <SuspenseError loading={<LoadingUser />} error={"..ini error"}>
            <UserPages />
          </SuspenseError>
        ),
      },
      {
        path: "/dashboard/request",
        element: (
          <SuspenseError loading={<LoadingRequest />} error={"..ini error"}>
            <RequestPages />
          </SuspenseError>
        ),
      },
      {
        path: "/dashboard/report",
        element: (
          <SuspenseError loading={<LoadingReport />} error={"..ini error"}>
            <ReportPages />
          </SuspenseError>
        ),
      },
      {
        path: "/dashboard/quota",
        element: (
          <SuspenseError loading={<Spinner />} error={"..ini error"}>
            <QuotaPages />
          </SuspenseError>
        ),
      },
    ],
  },
]);
