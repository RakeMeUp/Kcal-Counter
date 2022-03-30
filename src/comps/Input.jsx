import React, {useContext} from "react";
import { TempItemContext } from "./addingModal";

//reset inputs with form reset

export default function Input(props) {
  const { tempItem, setTempItem } = useContext(TempItemContext);

  const handleInput = (e)=>{
    if (props.value === ""){
      return;
    }
    
    setTempItem(tempItem[props.value] = e.target.value);
  }


  return (
    <label className={`w-${props.width}`}>
      <span className="ml-4 text-lg text-paletteGray">
        {props.title}
        {props.required && (
          <span className="text-paletteRed">
            *
          </span>
        )}
        
      </span>
      <input
        type={props.type}
        onChange={(e)=>handleInput(e)}
        className={`w-${props.width} inputText h-10 `}
        placeholder={props.placeholder}
        required={props.required}
      />
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
