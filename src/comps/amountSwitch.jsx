import { useState } from "react";
import React from "react";

export default function AmountSwitch() {
  const selected = "bg-indigo-400 text-white";
  const notSelected = "bg-paletteBG font-light text-paletteGray";
  const baseClass = "text-lg w-10 h-10 flex items-center justify-center figShadow";

  const handleClick = (value) => {
    setSelect(value);
  };

  const [select, setSelect] = useState("g");

  return (
    <div className="flex items-end ml-3">
      <div
        onClick={() => {
          handleClick("g");
        }}
        className={`${select === "g" ? selected : notSelected} ${baseClass} rounded-l-full`}
      >
        g
      </div>
      <div
        onClick={() => {
          handleClick("kg");
        }}
        className={`${select === "kg" ? selected : notSelected} ${baseClass} rounded-r-full`}
      >
        kg
      </div>
    </div>
  );
}
