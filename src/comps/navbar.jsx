import React, { Component } from 'react'
import plus from '../img/plus.svg'
import person from '../img/person.svg'
import medal from '../img/medal.svg'

export default class navbar extends Component {
    render() {
        return (
            /* NAVBAR */
            <div className='z-10 flex justify-between w-full h-[100px] bg-white fixed bottom-0 rounded-t-[30px] drop-shadow-[0px_-2px_10px_rgba(0,0,0,0.25)]'>
                {/* Center Button */}
                <div className='left-0 right-0 mx-auto flex justify-center items-center w-[100px] h-[100px] bg-white border-2 border-paletteGray rounded-full absolute bottom-[25px]'>
                    <img src={plus} alt="PLUS" width="34px" />
                </div>
                {/* Left Button */}
                <div className='flex items-center justify-center w-[100px] h-[100px] mx-6 rounded-full'>
                    <img src={medal} alt="medal" width="40px" />
                </div>
                {/* Right Button */}
                <div className='flex items-center justify-center w-[100px] h-[100px] mx-6 rounded-full'>
                    <img src={person} alt="person" width="40px" />
                </div>
            </div>
        )
    }
}
