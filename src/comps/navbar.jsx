import React, { Component } from 'react'
import InputElement from './inputElement.jsx'

import plus from '../img/plus.svg'
import person from '../img/person.svg'
import medal from '../img/medal.svg'
import close from '../img/close.svg'
import downArrow from '../img/downArrow.svg'
import upArrow from '../img/upArrow.svg'

export default class navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            modalOpen: false,
            additionalOpen: true,
        }
    }

    AdditionalInformation = () =>{
        return (
            <>
                <div className='flex'>
                    <label className='w-full flex flex-col items-center'>
                        <span className='ml-4 text-lg text-paletteGray'>Protein(g)</span>
                        <InputElement classes={"w-28 h-10 mb-4"} placeholder={"E.g.: 100"} type={"number"}/>
                    </label>

                    <label className='w-full flex flex-col items-center'>
                        <span className='text-lg text-paletteGray'>Carbs(g)</span>
                        <InputElement classes={"w-28 h-10 mb-4"} placeholder={"E.g.: 100"} type={"number"}/>
                    </label>
                </div>
                <div className='flex'>
                    <label className='w-full flex flex-col items-center'>
                        <span className='ml-4 text-lg text-paletteGray'>Fat(g)</span>
                        <InputElement classes={"w-28 h-10 mb-4"} placeholder={"E.g.: 100"} type={"number"}/>
                    </label>

                    <label className='w-full flex flex-col items-center mb-7'>
                            <span className='text-lg text-paletteGray'>Salt(g)</span>
                            <InputElement classes={"w-28 h-10"} placeholder={"E.g.: 100"} type={"number"}/>
                    </label>
                </div>
            </>
        )
    }

    AddingModal = () =>{
        return (
            <div onClick={()=>{this.setState({modalOpen: !this.state.modalOpen})}} className='modal-bg z-50'>
                <div onClick={(e)=>{e.stopPropagation()}} className='modal-body bg-white w-[300px]'>
                    <div className='flex justify-between items-center pt-4 pl-5 pr-2'>
                        {/* HEAD */}
                        <div className='text-2xl font-medium'>Adding New Food</div>
                            {/* BUTTON */}
                            <button onClick={()=>{this.setState({modalOpen: !this.state.modalOpen})}} className='w-10 h-10 rounded-full flex justify-center items-center active:bg-paletteLightGray'>
                                <img src={close} alt="exit" />
                            </button>
                        </div>

                        {/* BODY */}
                        <form className='px-5'>

                            <label className='flex flex-col mb-5'>
                                <span className='ml-4 text-lg text-paletteGray'>Name of Food</span>
                                <InputElement/>
                            </label>

                            <label className='flex flex-col mb-5'>
                                <span className='ml-4 text-lg text-paletteGray'>Amount</span>
                                <div className='flex'>
                                    <InputElement classes={"w-32 mr-5"} type={"number"} placeholder={"E.g.:100"}/>
                                    <div className='flex'>
                                        <div className='text-lg font-light text-paletteGray bg-paletteBG w-10 h-10 flex items-center justify-center rounded-l-full figShadow'>g</div>
                                        <div className='text-lg font-light text-paletteGray bg-indigo-400 w-10 h-10 flex items-center justify-center rounded-r-full figShadow'>kg</div>
                                    </div>
                                </div>
                            </label>

                            <label className='flex flex-col'>
                                <span className='ml-4 text-lg text-paletteGray'>Kcal/100g</span>
                                <InputElement classes={"w-24 h-10"} type={"number"} placeholder={"E.g.:100"}/>
                            </label>
                            
                            {/* Click for More */}
                            <div onClick={()=>{this.setState({additionalOpen: !this.state.additionalOpen})}} className='mt-9 mb-5 flex items-center'>
                                <img id="arrow" src={this.state.additionalOpen ? downArrow : upArrow} alt="asd" className="mr-2" />
                                <span className='font-light text-sm text-paletteGray'>
                                    Additional Information
                                </span>
                            </div>

                            {this.state.additionalOpen && <this.AdditionalInformation/>}
                            

                        </form>
                </div>
            </div>
        )
    }

    render() {
        return (
            <>
            {this.state.modalOpen && <this.AddingModal/> }
            
            {/* NAVBAR */}
            <div className='z-40 flex justify-between w-full h-[100px] bg-white fixed bottom-0 rounded-t-[30px] drop-shadow-[0px_-2px_10px_rgba(0,0,0,0.25)]'>
                {/* Center Button */}
                <button onClick={()=>{this.setState({modalOpen: !this.state.modalOpen})}} className='hover:brightness-75 left-0 right-0 mx-auto flex justify-center items-center w-[100px] h-[100px] bg-white border-2 border-paletteGray rounded-full absolute bottom-[25px]'>
                    <img src={plus} alt="PLUS" width="34px" />
                </button>

                {/* Left Button */}
                <button className='flex items-center justify-center w-[100px] h-[100px] mx-6 rounded-full'>
                    <img src={medal} alt="medal" width="40px" />
                </button>

                {/* Right Button */}
                <button className='flex items-center justify-center w-[100px] h-[100px] mx-6 rounded-full'>
                    <img src={person} alt="person" width="40px" />
                </button>
            </div>
            </>
        )
    }
}
