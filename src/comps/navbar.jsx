import React, { Component } from 'react'

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
            additionalOpen: false,
            nameInput: "",
            amountInput:"",
            kcalInput: "",
            additional: {
                proteinInput:"",
                carbsInput:"",
                fatInput:"",
                saltInput:"",
            }
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addItem({
            name: this.state.nameInput,
            amount: this.state.amountInput,
            kcal: this.state.kcalInput,
            additional: {
                protein: this.state.additional.proteinInput,
                carbs: this.state.additional.carbsInput,
                fat: this.state.additional.fatInput,
                salt: this.state.additional.saltInput,
            }
        })
    }

    AddingModal = () =>{
        return (
            <div onClick={()=>{this.setState({modalOpen: !this.state.modalOpen})}} className='modal-bg z-50'>
                <div onClick={(e)=>{e.stopPropagation()}} className='modal-body bg-white w-[300px]'>
                    <div className='flex justify-between items-center pt-4 pl-5 pr-2'>
                        {/* HEAD */}
                        <div className='text-2xl font-medium'>Adding New Food</div>
                            {/* CLOSE BUTTON */}
                            <button onClick={()=>{this.setState({modalOpen: !this.state.modalOpen})}} className='w-10 h-10 rounded-full flex justify-center items-center active:bg-paletteLightGray'>
                                <img src={close} alt="exit" />
                            </button>
                        </div>

                        {/* BODY */}
                        <form onSubmit={this.handleSubmit} className='px-5'>

                            {/* NAME OF FOOD */}
                            <label className='flex flex-col mb-5'>
                                <span className='ml-4 text-lg text-paletteGray'>Name of Food</span>
                                <input type="text"
                                    className='inputText h-10'
                                    value={this.state.nameInput}
                                    onChange={(e)=>{this.setState({nameInput: e.target.value})}}
                                    />
                            </label>

                            {/* AMOUNT */}
                            <label className='flex flex-col mb-5'>
                                <span className='ml-4 text-lg text-paletteGray'>Amount</span>
                                <div className='flex'>
                                <input type="number"
                                        className='inputText h-10 w-32' 
                                        value={this.state.amountInput}
                                        onChange={(e)=>{this.setState({amountInput: e.target.value})}}/>

                                        
                                    <div className='flex'>
                                        <div className='text-lg font-light text-paletteGray bg-paletteBG w-10 h-10 flex items-center justify-center rounded-l-full figShadow'>g</div>
                                        <div className='text-lg font-light text-paletteGray bg-indigo-400 w-10 h-10 flex items-center justify-center rounded-r-full figShadow'>kg</div>
                                    </div>
                                </div>
                            </label>

                            <div className='flex justify-between items-center'>
                                {/* KCAL/100g */}
                                <label className='flex flex-col'>
                                    <span className='ml-4 text-lg text-paletteGray'>Kcal/100g</span>
                                    <input type="number"
                                            className='inputText h-10 w-32' 
                                            value={this.state.kcalInput}
                                            onChange={(e)=>{this.setState({kcalInput: e.target.value})}}/>
                                </label>
                                <button type="submit" className='bg-paletteGreen rounded-full w-20 h-20'>asd</button>
                            </div>


                            
                            
                            {/* Click for More */}
                            <div onClick={()=>{this.setState({additionalOpen: !this.state.additionalOpen})}} className='mt-9 mb-5 flex items-center'>
                                <img id="arrow" src={this.state.additionalOpen ? upArrow : downArrow} alt="asd" className="mr-2" />
                                <span className='font-light text-sm text-paletteGray'>
                                    Additional Information
                                </span>
                            </div>

                            {this.state.additionalOpen && 
                            (
                                <>
                                    <div className='flex'>
                                        {/* PROTEIN */}
                                        <label className='w-full flex flex-col items-center'>
                                            <span className='ml-4 text-lg text-paletteGray'>Protein(g)</span>
                                            <input type="number"
                                                    className='inputText h-10 w-32' 
                                                    value={this.state.proteinInput}
                                                    onChange={(e)=>{this.setState({
                                                        additional: {
                                                            ...this.state.additional,
                                                            proteinInput: e.target.value}})}}/>

                                        </label>

                                        {/* CARBS */}
                                        <label className='w-full flex flex-col items-center'>
                                            <span className='text-lg text-paletteGray'>Carbs(g)</span>
                                            <input type="number"
                                                    className='inputText h-10 w-32' 
                                                    value={this.state.carbsInput}
                                                    onChange={(e)=>{this.setState({additional:{
                                                        ...this.state.additional,
                                                        carbsInput: e.target.value}})}}/>

                                        </label>
                                    </div>
                                    <div className='flex'>
                                        {/* FAT */}
                                        <label className='w-full flex flex-col items-center'>
                                            <span className='ml-4 text-lg text-paletteGray'>Fat(g)</span>
                                            <input type="number"
                                                    className='inputText h-10 w-32' 
                                                    value={this.state.fatInput}
                                                    onChange={(e)=>{this.setState({additional:{
                                                        ...this.state.additional,
                                                        fatInput: e.target.value}})}}/>

                                        </label>
                            
                                        {/* SALT */}
                                        <label className='w-full flex flex-col items-center mb-7'>
                                                <span className='text-lg text-paletteGray'>Salt(g)</span>
                                                <input type="number"
                                                    className='inputText h-10 w-32' 
                                                    value={this.state.saltInput}
                                                    onChange={(e)=>{this.setState({additional:{
                                                        ...this.state.additional,
                                                        saltInput: e.target.value}})}}/>

                                        </label>
                                    </div>
                                </>
                            )}
                            

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
                <nav className='z-40 hidden keyboardClosed:flex justify-between sm:justify-around w-full sm:max-w-5xl h-[100px] bg-white fixed self-center bottom-0 rounded-t-[30px] drop-shadow-[0px_-2px_10px_rgba(0,0,0,0.25)]'>
                    {/* Center Button */}
                    <button onClick={()=>{this.setState({modalOpen: !this.state.modalOpen})}} className='hover:brightness-90 left-0 right-0 mx-auto flex justify-center items-center w-[100px] h-[100px] bg-white figShadow rounded-full absolute bottom-[25px]'>
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
                </nav>
            </>
        )
    }
}
