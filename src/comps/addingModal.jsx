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
import { listOfItemsContext } from "../newApp";

export const TempItemContext = createContext({
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
  const [tempItem, setTempItem] = useState({
    name: "Name",
    kpp: "N/A",
    amount: "N/A",
    meter: 1,
    additional: {
      protein: "N/A",
      carbs: "N/A",
      fat: "N/A",
      salt: "N/A",
    },
  });
  const { addModalIsOpen, setAddModalIsOpen } = useContext(ModalContext);
  const { listElements, setListElements } = useContext(listOfItemsContext);

  const scrollToBottom = () => {
    document.querySelector("#scrollHereBaka").scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = () => {
    setListElements([...listElements, tempItem]);
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
          {/* HEADER */}
          <header className="flex justify-between items-center pt-3 pl-5 pr-2">
            {/* TITLE */}
            <div className="text-2xl font-medium">Adding New Food</div>
            {/* CLOSE BUTTON */}
            <button
              onClick={() => {
                setAddModalIsOpen(!addModalIsOpen);
              }}
              className="w-10 h-10 rounded-full flex justify-center items-center active:bg-paletteLightGray"
            >
              <img src={close} alt="exit" width={"20px"} />
            </button>
          </header>

          {/* BODY */}
          <TempItemContext.Provider value={{ tempItem, setTempItem }}>
            <form
              className="px-5 flex flex-col gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <Input title="Name of Food" required={true} value="name" />

              <label className="flex">
                <Input title="Amount" width="md" value="amount" />
                <AmountSwitch />
              </label>

              <label className="flex">
                <Input title="Price" width="md" required={true} />
                <CurrencySelectList />
              </label>

              <div className="flex">
                {/* KCAL/100g */}
                <Input title="Kcal/100g" width="sm" required={true} />

                {/* SUBMIT BUTTON */}
                <button type="submit" className="bg-paletteGreen ml-7 mt-2 figShadowBig rounded-full w-20 h-20 text-2xl font-medium text-white active:shadow-none active:brightness-75">
                  ADD
                </button>
              </div>

              <span className="text-paletteRed text-xs">*required</span>

              {/* Click for More */}
              <div
                onClick={() => {
                  setAdditionalIsOpen(!additionalIsOpen);
                }}
                className="flex items-center"
              >
                <img id="arrow" src={additionalIsOpen ? upArrow : downArrow} alt="asd" className="mr-2" />
                <span className="font-light text-sm text-paletteGray">Additional Information</span>
              </div>

              {additionalIsOpen && (
                <>
                  <div className="flex gap-9">
                    {/* PROTEIN */}
                    <Input title="Protein(g)" width="xs" value="additional.protein" />
                    {/* CARBS */}
                    <Input title="Carbs(g)" width="xs" value="additional.carbs" />
                  </div>
                  <div id="scrollHereBaka" className="flex gap-9">
                    {/* FAT */}
                    <Input title="Fat(g)" width="xs" value="additional.fat" />
                    {/* SALT */}
                    <Input title="Salt(g)" width="xs" value="additional.salt" />
                  </div>
                </>
              )}
            </form>
          </TempItemContext.Provider>
        </div>
        {/* SCROLL DOWN OVERLAY */}
        {additionalIsOpen && (
          <div onClick={scrollToBottom} className="absolute hidden keyboardOpen:flex items-center justify-center left-0 right-0 bottom-0 h-10 rounded-b-[30px] gradientUp ">
            <img src={downArrowDouble} width={"20px"} alt="scroll down" />
          </div>
        )}
      </div>
    </div>
  );
}
