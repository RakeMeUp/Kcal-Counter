import React, { Component } from 'react'

import plus from '../img/plus.svg'
import person from '../img/person.svg'
import medal from '../img/medal.svg'
import close from '../img/close.svg'
import downArrow from '../img/downArrow.svg'
import upArrow from '../img/upArrow.svg'
import downArrowDouble from '../img/downArrowDouble.svg'

export default class navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            modalOpen: false,
            additionalOpen: false,
            currencySelectOpen: false,
            nameInput: "",
            amountInput:"",
            kcalInput: "",
            amountType: "g",
            additional: {
                proteinInput:"",
                carbsInput:"",
                fatInput:"",
                saltInput:"",
            }
        }
        this.currency = this.props.currentCurrency;
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addItem({
            name: this.state.nameInput,
            amount: this.state.amountInput,
            kcal: this.state.kcalInput,
            amountType: this.state.amountType,
            selectedCurrency: this.state.selectedCurrency,
            price: this.state.priceInput,
            additional: {
                protein: this.state.additional.proteinInput,
                carbs: this.state.additional.carbsInput,
                fat: this.state.additional.fatInput,
                salt: this.state.additional.saltInput,
            }
        });

        /* RESETTING STATES, VARIABLES */
        this.setState({
            nameInput: "",
            amountInput:"",
            kcalInput: "",
            amountType: "g",
            selectedCurrency: "HUF",
            price: "",
            additional: {
                proteinInput:"",
                carbsInput:"",
                fatInput:"",
                saltInput:"",
            }
        });
        this.currency = this.props.currentCurrency
    }

    AddingModal = () =>{
        const scrollToBottom=()=>{
            document.querySelector("#scrollHereBaka").scrollIntoView({behavior: "smooth"})
        }

        const CurrencyList=()=>{
            const ListItem=(props)=>{
                return(
                    <li onClick={()=>{this.setState({selectedCurrency: props.currency}); this.currency = props.currency}} 
                    className='h-full text-paletteGray border-[2px] border-b-paletteLightGray w-full flex items-center justify-center'>
                        {props.currency}
                    </li>
                )
            }

            return(
                <ol onClick={()=>{this.setState({currencySelectOpen: !this.state.currencySelectOpen})}} 
                className='absolute top-0 ml-3 w-20 inputText h-40 rounded-[15px] flex flex-col items-center'>
                    <ListItem currency={"HUF"}/>
                    <ListItem currency={"EUR"}/>
                    <ListItem currency={"GBP"}/>
                    <ListItem currency={"USD"}/>
                    <li className='h-3/4 w-full flex items-center justify-center'>
                        <img src={upArrow} alt="back" />
                    </li>
                </ol>
            )
        }

        return (
            <div onClick={()=>{this.setState({modalOpen: !this.state.modalOpen})}} className='modal-bg z-50'>
                <div onClick={(e)=>{e.stopPropagation()}} className='relative'>
                    <div  className={`relative modal-body pb-5 bg-white w-[300px] ${this.state.additionalOpen && "keyboardOpen:h-[80vh] keyboardOpen:overflow-scroll"}`}>
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
                                    <span className='ml-4 mt-2 text-lg text-paletteGray'>Name of Food</span>
                                    <input type="text"
                                        className='inputText h-10'
                                        value={this.state.nameInput}
                                        onChange={(e)=>{this.setState({nameInput: e.target.value})}}
                                        placeholder='E.g: Banana'
                                        required
                                        />
                                </label>

                                {/* AMOUNT */}
                                <label className='flex flex-col mb-5'>
                                    <span className='ml-4 text-lg text-paletteGray'>Amount</span>
                                    <div className='flex'>
                                        <input type="number"
                                                className='inputText h-10 w-36' 
                                                value={this.state.amountInput}
                                                onChange={(e)=>{this.setState({amountInput: e.target.value})}}
                                                placeholder="E.g: 100"
                                        />
                                        <div className='flex ml-3'>
                                            <div onClick={()=>{this.setState({amountType: "g"})}} 
                                                className={`text-lg ${this.state.amountType === "g" ? "bg-indigo-400 text-white" : "bg-paletteBG font-light text-paletteGray"} 
                                                            w-10 h-10 flex items-center justify-center rounded-l-full figShadow`}>
                                                g
                                            </div>
                                            <div onClick={()=>{this.setState({amountType: "kg"})}} 
                                                className={`text-lg ${this.state.amountType === "kg" ? "bg-indigo-400 text-white" : "bg-paletteBG font-light text-paletteGray"} 
                                                            w-10 h-10 flex items-center justify-center rounded-r-full figShadow`}>
                                                kg
                                            </div>
                                        </div>
                                    </div>
                                </label>

                                    {/* PRICE */}
                                <label className='flex mb-5'>
                                    <div className='w-full'>
                                        <span className='ml-4 mt-2 text-lg text-paletteGray'>Price</span>
                                        <input type="number"
                                            className='inputText h-10 w-36'
                                            value={this.state.priceInput}
                                            onChange={(e)=>{this.setState({priceInput: e.target.value})}}
                                            placeholder='E.g: 100'
                                            required
                                            />
                                    </div>

                                    {/* SELECT CURRENCY */}
                                    <div className='w-full flex items-end ' > 
                                        <div className='relative w-full h-10'>
                                            <div onClick={()=>{this.setState({currencySelectOpen: !this.state.currencySelectOpen})}} 
                                            className={`${this.state.currencySelectOpen ? "hidden" : "flex"} 
                                            inputText h-10 w-20 pr-3 ml-3 items-center justify-between`}>
                                                <span className='text-paletteGray'>{this.currency}</span>
                                                <img src={downArrow} width={"14px"} alt="more" />
                                            </div>
                                            {this.state.currencySelectOpen && <CurrencyList/>}
                                        </div>
                                    </div>
                                </label>

                                <div className='flex items-center'>
                                    {/* KCAL/100g */}
                                    <label className='flex flex-col'>
                                        <span className='ml-4 text-lg text-paletteGray'>Kcal/100g</span>
                                        <input type="number"
                                                className='inputText h-10 w-28' 
                                                value={this.state.kcalInput}
                                                onChange={(e)=>{this.setState({kcalInput: e.target.value})}}
                                                placeholder="E.g: 100"
                                                required
                                                />
                                    </label>

                                    {/* SUBMIT BUTTON */}
                                    <button type="submit" 
                                            className='bg-paletteGreen figShadowBig 
                                            rounded-full ml-11 w-20 h-20 text-2xl 
                                            font-medium text-white active:shadow-none active:brightness-75'>ADD</button>
                                </div>


                                
                                
                                {/* Click for More */}
                                <div onClick={()=>{this.setState({additionalOpen: !this.state.additionalOpen})}} className='mt-9 flex items-center'>
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
                                                        className='inputText h-10 w-28 mb-4' 
                                                        value={this.state.additional.proteinInput}
                                                        onChange={(e)=>{this.setState({
                                                            additional: {
                                                                ...this.state.additional,
                                                                proteinInput: e.target.value}})}}
                                                                placeholder="E.g: 100"
                                                                />

                                            </label>

                                            {/* CARBS */}
                                            <label className='w-full flex flex-col items-center'>
                                                <span className='text-lg text-paletteGray'>Carbs(g)</span>
                                                <input type="number"
                                                        className='inputText h-10 w-28 mb-4' 
                                                        value={this.state.additional.carbsInput}
                                                        onChange={(e)=>{this.setState({additional:{
                                                            ...this.state.additional,
                                                            carbsInput: e.target.value}})}}
                                                            placeholder="E.g: 100"
                                                            />

                                            </label>
                                        </div>
                                        <div className='flex'>
                                            {/* FAT */}
                                            <label className='w-full flex flex-col items-center'>
                                                <span className='ml-4 text-lg text-paletteGray'>Fat(g)</span>
                                                <input type="number"
                                                        className='inputText h-10 w-28' 
                                                        value={this.state.additional.fatInput}
                                                        onChange={(e)=>{this.setState({additional:{
                                                            ...this.state.additional,
                                                            fatInput: e.target.value}})}}
                                                            placeholder="E.g: 100"
                                                            />

                                            </label>
                                
                                            {/* SALT */}
                                            <label id='scrollHereBaka' className='w-full flex flex-col items-center mb-7'>
                                                    <span className='text-lg text-paletteGray'>Salt(g)</span>
                                                    <input type="number"
                                                        className='inputText h-10 w-28' 
                                                        value={this.state.additional.saltInput}
                                                        onChange={(e)=>{this.setState({additional:{
                                                            ...this.state.additional,
                                                            saltInput: e.target.value}})}}
                                                            placeholder="E.g: 100"
                                                            />

                                            </label>
                                        </div>
                                    </>
                                )}
                                

                            </form>
                    </div>
                    {this.state.additionalOpen && 
                            <div onClick={scrollToBottom} className='absolute hidden keyboardOpen:flex items-center justify-center left-0 right-0 bottom-0 h-10 rounded-b-[30px] gradientUp '>
                                <img src={downArrowDouble} width={"20px"} alt="scroll down" />
                            </div>}
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
                    <button onClick={()=>{
                        this.setState({modalOpen: !this.state.modalOpen})
                        }} className='hover:brightness-90 left-0 right-0 mx-auto flex justify-center items-center w-[100px] h-[100px] bg-white figShadow rounded-full absolute bottom-[25px]'>
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
