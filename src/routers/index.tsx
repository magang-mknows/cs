import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "@/layouts/auth";
import { BaseLayout } from "@/layouts/base";
import Spinner from "@/components/atoms/loading/spinner";
import { LoadingGrafik } from "@/modules/report/grafik/loading";
import { LoadingReport } from "@/modules/report/loading";
import SuspenseError from "@/modules/common/suspense-error";

import { BaseLayoutSkeleton } from "@/layouts/base/base-skeleton";
import { AuthSkeleton } from "@/layouts/auth/auth-skeleton";
import { ErrorHome } from "@/modules/home/error";
import { ErrorModules } from "@/modules/common/errorpage";
import { ErrorLogin } from "@/modules/auth/login/error-login";
import ReportPages from "@/pages/report";
import ReportModules from "@/modules/report/report";
import ChartReport from "@/modules/report/grafik";
import { LoadingUser } from "@/modules/user/loading";

const LoginPages = lazy(() => import("@/pages/auth/login"));
const HomePages = lazy(() => import("@/pages/home"));
const UserPages = lazy(() => import("@/pages/user"));
const AddDataPages = lazy(() => import("@/pages/user/add-data"));
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
          <SuspenseError loading={<Spinner />} error={<ErrorHome />}>
            <HomePages />
          </SuspenseError>
        ),
      },
      {
        path: "/dashboard/user",
        element: (
          <SuspenseError loading={<Spinner />} error={"..ini error"}>
            <UserPages />
          </SuspenseError>
        ),
      },
      {
        path: "/dashboard/user/add-data",
        element: (
          <SuspenseError loading={<LoadingUser />} error={"..ini error"}>
            <AddDataPages />
          </SuspenseError>
        ),
      },
      {
        path: "/dashboard/request",
        element: (
          <SuspenseError loading={<Spinner />} error={"..ini error"}>
            <RequestPages />
          </SuspenseError>
        ),
      },
      {
        path: "/dashboard/report",
        element: (
          <SuspenseError loading={<Spinner />} error={"..ini error"}>
            <ReportPages />
          </SuspenseError>
        ),
        children: [
          {
            path: "/dashboard/report",
            element: (
              <SuspenseError loading={<LoadingReport />} error={"..ini error"}>
                <ReportModules />
              </SuspenseError>
            ),
          },
          {
            path: "/dashboard/report/grafik",
            element: (
              <SuspenseError loading={<LoadingGrafik />} error={"..ini error"}>
                <ChartReport />
              </SuspenseError>
            ),
          },
        ],
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
