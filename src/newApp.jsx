import React, { createContext, useState } from "react";
import ListElement from "./comps/listElement.jsx";
import CurrencyButton from "./comps/currencyButton.jsx";
import Navbar from "./comps/navbar";

export const CurrencyContext = createContext("HUF");

export default function App() {
  const [currentCurrency, setCurrentCurrency] = useState("HUF");
  const [listElements, setListElements] = useState([]);

  const handleCurrencyChange = (arg) => {
    setCurrentCurrency(arg);
  };

  const addItem = (item) => {
    setListElements([...listElements, item]);
  };

  /* making a copy of the state, and we work on that, to avoid mutating the state */
  const nameChange = (id, text) => {
    let tempListElArray = [listElements];
    tempListElArray[id].name = text;
    setListElements(tempListElArray);
  };

  const EmptyList = () => {
    return (
      <div className="fixed mt-20 inset-0 flex items-center justify-center">
        <div className="w-60 text-center mb-40">
          <span className="text-2xl font-bold text-gray-400 ">Add a new Item with the Plus Button below.</span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      {/* Title Bar */}
      <header className="relative w-full flex justify-center py-6">
        <div className="flex justify-center w-full">
          <span className="text-2xl text-paletteGray font-medium ">Food List</span>
        </div>
        <div className="absolute inset-0 flex flex-row-reverse items-center pr-4">
          <CurrencyContext.Provider value={{ currentCurrency, setCurrentCurrency }}>
            <CurrencyButton handleCurrencyChange={handleCurrencyChange} />
          </CurrencyContext.Provider>
        </div>
      </header>

      {/* List elements */}
      <main id="container" className="flex flex-col md:items-center">
        <ol>
          {listElements.length ? (
            listElements.map((listEl, index) => {
              return <ListElement name={listEl.name} kpp={listEl.kpp} amount={listEl.amount} meter={listEl.meter} additional={listEl.additional} key={index} id={index} nameChange={nameChange} />;
            })
          ) : (
            <EmptyList />
          )}
        </ol>
      </main>
      <CurrencyContext.Provider value={{ currentCurrency, setCurrentCurrency }}>
        <Navbar addItem={addItem} />
      </CurrencyContext.Provider>
    </div>
  );
}
