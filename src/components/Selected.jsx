import React from "react";
import { SelectedContext } from "../context/SelectedContext";

export default function Selected() {

  const { selected } = React.useContext(SelectedContext);

  return (
    <div className="hidden lg:inline lg:border lg:border-solid lg:border-gray-700 lg:w-2/4 lg:h-screen lg:my-2 lg:p-2 lg:bg-white">
      <p className="hidden lg:inline lg:font-semibold lg:text-xl">{selected.name}</p>
    </div>
  );
}