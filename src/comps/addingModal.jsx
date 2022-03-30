import React, { useContext, createContext, useState } from "react";
import { ModalContext } from "./navbar";
/* COMPONENTS */
import Input from "./Input";
import AmountSwitch from "./amountSwitch";
import CurrencySelectList from "./currencySelectList";
/* ASSETS */
import close from "../img/close.svg";
import downArrow from "../img/downArrow.svg";
import upArrow from "../img/upArrow.svg";
import downArrowDouble from "../img/downArrowDouble.svg";

export const itemAddedContext = createContext({
  name: "Name",
  kpp: "N/A",
  amount: "N/A",
  meter: 1,
  additional: {
    protein: "N/A",
    carbs: "N/A",
    fat: "N/A",
  },
});

export default function AddingModal() {
  const [additionalIsOpen, setAdditionalIsOpen] = useState(false);
  const { addModalIsOpen, setAddModalIsOpen } = useContext(ModalContext);

  const scrollToBottom = () => {
    document.querySelector("#scrollHereBaka").scrollIntoView({ behavior: "smooth" });
  };

  return (
    /* MODAL BACKGROUND */
    <div
      onClick={() => {
        setAddModalIsOpen(!addModalIsOpen);
      }}
      className="modal-bg z-50"
    >
      {/* MODAL BODY */}
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative"
      >
        <div className={`relative modal-body pb-5 bg-white w-[300px] ${additionalIsOpen && "keyboardOpen:h-[80vh] keyboardOpen:overflow-scroll"}`}>
          <div className="flex justify-between items-center pt-4 pl-5 pr-2">
            {/* HEAD */}
            <div className="text-2xl font-medium">Adding New Food</div>
            {/* CLOSE BUTTON */}
            <button
              onClick={() => {
                setAddModalIsOpen(!addModalIsOpen);
              }}
              className="w-10 h-10 rounded-full flex justify-center items-center active:bg-paletteLightGray"
            >
              <img src={close} alt="exit" />
            </button>
          </div>

          {/* BODY */}
          <form
            /*             onSubmit={this.handleSubmit} */
            className="px-5 flex flex-col gap-3"
          >
            {/* NAME OF FOOD */}
            <label>
              <Input />
            </label>

            {/* AMOUNT */}
            <label className="flex">
              <Input />
              <AmountSwitch />
            </label>

            {/* PRICE */}
            <label className="flex">
              <Input />

              {/* SELECT CURRENCY */}
              <CurrencySelectList />
            </label>

            <div className="flex items-center">
              {/* KCAL/100g */}
              <label className="flex flex-col">
                <Input />
              </label>

              {/* SUBMIT BUTTON */}
              <button type="submit" className="bg-paletteGreen figShadowBig rounded-full ml-11 w-52 h-20 text-2xl font-medium text-white active:shadow-none active:brightness-75">
                ADD
              </button>
            </div>

            {/* Click for More */}
            <div
              onClick={() => {
                setAdditionalIsOpen(!additionalIsOpen);
              }}
              className="mt-9 flex items-center"
            >
              <img id="arrow" src={additionalIsOpen ? upArrow : downArrow} alt="asd" className="mr-2" />
              <span className="font-light text-sm text-paletteGray">Additional Information</span>
            </div>

            {additionalIsOpen && (
              <>
                <div className="flex">
                  {/* PROTEIN */}
                  <label className="w-full flex flex-col items-center">
                    <Input />
                  </label>

                  {/* CARBS */}
                  <label className="w-full flex flex-col items-center">
                    <Input />
                  </label>
                </div>
                <div className="flex">
                  {/* FAT */}
                  <label className="w-full flex flex-col items-center">
                    <Input />
                  </label>

                  {/* SALT */}
                  <label id="scrollHereBaka" className="w-full flex flex-col items-center mb-7">
                    <Input />
                  </label>
                </div>
              </>
            )}
          </form>
        </div>
        {additionalIsOpen && (
          <div onClick={scrollToBottom} className="absolute hidden keyboardOpen:flex items-center justify-center left-0 right-0 bottom-0 h-10 rounded-b-[30px] gradientUp ">
            <img src={downArrowDouble} width={"20px"} alt="scroll down" />
          </div>
        )}
      </div>
    </div>
  );
}
