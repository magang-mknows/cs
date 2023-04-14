import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { routes } from "./routers";
import "./styles/index.css";

const htmlElement = document.getElementById("root") as HTMLElement;
const root = createRoot(htmlElement);

root.render(
  <StrictMode>
    <RecoilRoot>
      <RouterProvider router={routes} />
    </RecoilRoot>
  </StrictMode>,
);
