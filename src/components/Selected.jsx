import React from "react";
import { SelectedContext } from "../context/SelectedContext";

export default function Selected() {

  const { selected } = React.useContext(SelectedContext);

  return (
    <div className="sm:border border-solid border-gray-700 w-2/4 h-screen mt-4 p-2">
      <p className="font-semibold text-xl">{selected.name}</p>
    </div>
  );
}