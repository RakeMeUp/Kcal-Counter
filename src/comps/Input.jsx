import React from "react";

//reset inputs with form reset

export default function Input(props) {
  return (
    <div>
      <span className="ml-4 text-lg text-paletteGray">{props.title}</span>
      <input
        type={props.type}
        onChange={(e) => {
          props.getState(e.target.value);
        }}
        className={`inputText h-10 w-${props.width}`}
        placeholder={props.placeholder}
        required={props.required}
      />
    </div>
  );
}

Input.defaultProps = {
  title: "Title",
  type: "text",
  valueState: "value",
  width: "full",
  placeholder: "placeholder",
  required: false,
};
