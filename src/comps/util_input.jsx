import React, { useContext } from "react";
import { TempItemContext } from "./modal_addItem";

//reset inputs with form reset

export default function Input(props) {
  const { tempItem, setTempItem } = useContext(TempItemContext);

  const debounce=(cb, delay = 1000)=>{
    let timeout

    return(...args)=>{
      clearTimeout(timeout)
      timeout = setTimeout(()=>{
        cb(...args)
      }, delay)
    }
  }

  const changeTempItem = (e) => {
    if (props.value === "") {
      return;
    }
    let temp = { ...tempItem };
    temp[props.value] = e.target.value;
    setTempItem(temp);
  };

  const handleInput=(e)=>{
    debounce(changeTempItem(e));
  }

  let width = (w) => {
    switch (w) {
      case "sm":
        return "w-32";
      case "md":
        return "w-36";
      case "xs":
        return "w-28";
      default:
        return "w-full";
    }
  };

  return (
    <label className={`${width(props.width)}`}>
      <span className="ml-4 text-lg text-paletteGray">
        {props.title}
        {props.required && <span className="text-paletteRed">*</span>}
      </span>
      <input type={props.type} onChange={(e) => handleInput(e)} className={`${width(props.width)} inputText h-10 `} placeholder={props.placeholder} required={props.required} />
    </label>
  );
}

Input.defaultProps = {
  title: "Title",
  type: "text",
  value: "",
  width: "full",
  placeholder: "placeholder",
  required: false,
};
