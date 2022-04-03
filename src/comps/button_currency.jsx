import React, { useContext, useState } from "react";
import { CurrencyContext } from "../App";
import downArrow from "../img/downArrow.svg";
import upArrow from "../img/upArrow.svg";

export default function CurrencyButton() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [listIsOpen, setListIsOpen] = useState(false);
  const { currentCurrency, setCurrentCurrency } = useContext(CurrencyContext);

  const handleChange = (arg) => {
    setCurrentCurrency(arg);
    setModalIsOpen(!modalIsOpen);
    setListIsOpen(!listIsOpen);
  };

  const ListItem = (props) => {
    return (
      <li
        onClick={() => {
          handleChange(props.currency);
        }}
        className="h-10 border-b-[1px] border-paletteLightGray mx-6 flex items-center justify-center"
      >
        {props.currency}
      </li>
    );
  };

  return (
    <>
      {/* GREEN BUTTON */}
      <div onClick={() => { setModalIsOpen(!modalIsOpen); }} className="figShadow cursor-pointer bg-paletteGreen w-10 h-10 rounded-full text-sm font-bold text-paletteBG flex items-center justify-center hover:brightness-90">
        <span>{currentCurrency}</span>
      </div>

      {/* MODAL */}
      {modalIsOpen && (
        <div onClick={() => { setModalIsOpen(!modalIsOpen); }} className="modal-bg z-50">
          <div onClick={(e) => { e.stopPropagation(); }} className="bg-paletteLightGray flex flex-col items-center modal-body w-56 pb-10">
            <span className="text-2xl font-medium">Currency</span>
            <div className="w-full h-full flex justify-center mt-5">
              {/* LIST */}
              {listIsOpen ? (
                <ol className="h-48 w-32 cursor-pointer bg-white rounded-[20px] figShadow">
                  <ListItem currency={"USD"} />
                  <ListItem currency={"HUF"} />
                  <ListItem currency={"EUR"} />
                  <ListItem currency={"GBP"} />
                  <li
                    onClick={() => {
                      setListIsOpen(!listIsOpen);
                    }}
                    className="h-7 flex items-center justify-center"
                  >
                    <img src={upArrow} alt="back" />
                  </li>
                </ol>
              ) : (
                <button
                  onClick={() => {
                    setListIsOpen(!listIsOpen);
                  }}
                  className=" h-10 w-32 flex items-center justify-between bg-white rounded-full figShadow"
                >
                  <span className="ml-5 text-sm font-light text-paletteGray">
                    {currentCurrency}
                  </span>
                  <img className="mr-3" src={downArrow} alt="more" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
