import { useState, useContext } from "react";
import { CurrencyContext } from "../App";
import React from "react";

import upArrow from "../img/upArrow.svg";
import downArrow from "../img/downArrow.svg";

export default function CurrencySelectList() {
  const [selectionIsOpen, setSelectionIsOpen] = useState(false);
  const { currentCurrency, setCurrentCurrency } = useContext(CurrencyContext);

  const List = (props) => {
    const ListItem = (props) => {
      return (
        <li
          onClick={() => {
            setCurrentCurrency(props.currency);
          }}
          className="h-full text-paletteGray border-[2px] border-b-paletteLightGray w-full flex items-center justify-center"
        >
          {props.currency}
        </li>
      );
    };

    return (
      <ol onClick={() => { props.handleStateChange(); }} className="absolute top-0 ml-3 w-20 inputText h-40 rounded-[15px] flex flex-col items-center cursor-pointer ">
        <ListItem currency={"HUF"} />
        <ListItem currency={"EUR"} />
        <ListItem currency={"GBP"} />
        <ListItem currency={"USD"} />
        <li className="h-3/4 w-full flex items-center justify-center">
          <img src={upArrow} alt="back" />
        </li>
      </ol>
    );
  };

  return (
    <div className="w-full flex items-end ">
      <div className="relative w-full h-10">
        <div
          onClick={() => {
            setSelectionIsOpen(!selectionIsOpen);
          }}
          className={`inputText h-10 w-20 pr-3 ml-3 items-center justify-between cursor-pointer  
          ${selectionIsOpen ? "hidden" : "flex"}`}
        >
          <span className="text-paletteGray">{currentCurrency}</span>
          <img src={downArrow} width={"14px"} alt="more" />
        </div>
        {selectionIsOpen && (
          <List
            handleStateChange={() => {
              setSelectionIsOpen(!selectionIsOpen);
            }}
          />
        )}
      </div>
    </div>
  );
}
