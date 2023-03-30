import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ErrorHome } from "modules/home/error-home";

const HomePages = lazy(() => import("../pages"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePages />,
    errorElement: <ErrorHome />,
  },
]);
