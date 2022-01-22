import React, { Component } from 'react'
import downArrow from '../img/downArrow.svg'
import upArrow from '../img/upArrow.svg'

export default class currencyButton extends Component {
    constructor(props){
        super(props)
        this.state = {
            modalOpen: false,
            listOpen: false,
        }
    }

    ClosedList=()=>{
        return (
            <button onClick={()=>{this.setState({listOpen: !this.state.listOpen})}} className=' h-10 w-32 flex items-center justify-between bg-white rounded-full figShadow'>
                <span className='ml-5 text-sm font-light text-paletteGray'>{this.props.currentCurrency ? this.props.currentCurrency : "HUF"}</span>
                <img className='mr-3' src={downArrow} alt="more" />
            </button>
        )
    }

    ListItem=(props)=>{
        return (
            <li onClick={()=>{this.props.handleCurrencyChange(props.currency); this.setState({listOpen: !this.state.listOpen})}} className='h-10 border-b-[1px] border-paletteLightGray mx-6 flex items-center justify-center'>
                {props.currency}
            </li>
        )
    }

    OpenedList=()=>{
        return (
            <ol className='h-48 w-32 bg-white rounded-[20px] figShadow'>
                <this.ListItem currency={"USD"}/>
                <this.ListItem currency={"HUF"}/>
                <this.ListItem currency={"EUR"}/>
                <this.ListItem currency={"GBP"}/>
                <li onClick={()=>{this.setState({listOpen: !this.state.listOpen})}} className='h-7 flex items-center justify-center'>
                    <img src={upArrow} alt="back" />
                </li>
            </ol>
        )
    }

    render() {
        return (
            <div onClick={()=>{this.setState({modalOpen: !this.state.modalOpen})}} >
                <div className='figShadow bg-paletteGreen w-10 h-10 
                rounded-full text-sm font-bold text-paletteBG flex items-center justify-center'>
                    <span>HUF</span>
                </div>
                {this.state.modalOpen && (
                    <div className='modal-bg z-50'>
                        <div onClick={(e)=>{e.stopPropagation()}} 
                        className='bg-paletteLightGray flex flex-col items-center 
                        modal-body w-64 h-72'>
                            <span className='text-2xl font-medium'>Currency</span>
                            <div className='w-full h-full flex justify-center mt-5 bg-paletteYellow'>
                                {this.state.listOpen ? <this.OpenedList/> : <this.ClosedList/>}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}