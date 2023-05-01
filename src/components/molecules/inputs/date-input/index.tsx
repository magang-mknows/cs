import { FC, ReactElement, useState } from "react";

export const DateInput: FC = (): ReactElement => {
  const [date] = useState();
  return (
    <div className="flex  p-1 lg:w-[276x] w-[250px] rounded-md border text-sm">
      <h1>Dari : {date}</h1>
      <input type="date" className="w-[8%]" />
      <h1>Sampai : {date}</h1>
      <input type="date" className="w-[8%]" />
    </div>
  );
};
