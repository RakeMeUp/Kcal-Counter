import React, { useState, createContext } from "react";
import AddingModal from "./addingModal";

import plus from "../img/plus.svg";
import person from "../img/person.svg";
import medal from "../img/medal.svg";

export const ModalContext = createContext(false);

export default function Navbar() {
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);

  return (
    <>
      <ModalContext.Provider value={{ addModalIsOpen, setAddModalIsOpen }}>{addModalIsOpen && <AddingModal />}</ModalContext.Provider>

      {/* NAVBAR */}
      <nav className="z-40 hidden keyboardClosed:flex justify-between sm:justify-around w-full sm:max-w-5xl h-[100px] bg-white fixed self-center bottom-0 rounded-t-[30px] drop-shadow-[0px_-2px_10px_rgba(0,0,0,0.25)]">
        {/* Center Button */}
        <button
          onClick={() => {
            setAddModalIsOpen(!addModalIsOpen);
          }}
          className="hover:brightness-90 left-0 right-0 mx-auto flex justify-center items-center w-[100px] h-[100px] bg-white figShadow rounded-full absolute bottom-[25px]"
        >
          <img src={plus} alt="PLUS" width="34px" />
        </button>

        {/* Left Button */}
        <button className="flex items-center justify-center w-[100px] h-[100px] mx-6 rounded-full">
          <img src={medal} alt="medal" width="40px" />
        </button>

        {/* Right Button */}
        <button className="flex items-center justify-center w-[100px] h-[100px] mx-6 rounded-full">
          <img src={person} alt="person" width="40px" />
        </button>
      </nav>
    </>
  );
}
