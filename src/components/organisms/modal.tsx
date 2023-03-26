import { FC, ReactElement } from "react";
import { createPortal } from "react-dom";
import Card from "../molecules/card";

const Modal: FC = (): ReactElement => {
  return (
    <section>
      <div>
        <span>Modal Title</span>
      </div>
      <Card />
    </section>
  );
};

createPortal(<Modal />, document.getElementById("modal") as HTMLElement);

export default Modal;
