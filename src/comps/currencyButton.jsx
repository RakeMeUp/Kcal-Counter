import React, { Component } from 'react'

export default class currencyButton extends Component {
    constructor(props){
        super(props)
        this.state = {
            modalOpen: false,
            selectClicked: false,
        }
        this.handleSelectClick = this.handleSelectClick.bind(this)
    }

    handleSelectClick (){
        this.setState({ selectClicked: !this.state.selectClicked })
        console.log('?')
    }

    closedSelect = (
        <div onClick={this.handleSelectClick} className="w-32 h-10 bg-white flex items-center rounded-full px-3">
            <div className='flex items-center justify-between w-full'>
                <span className='pl-2 text-paletteGray'>
                    USD
                </span>
                <svg width="17" height="11" viewBox="0 0 17 11">
                    <path d="M8.5 9.36454L2.03649 1H14.9635L8.5 9.36454Z" fill="#6A6A6A" stroke="#6A6A6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    )

    openSelect = (
        <div className="w-32 h-[200px] bg-white rounded-[30px] px-6">
            <ol className='flex flex-col items-center w-full'>
                <li className='list-item-custom'>HUF</li>
                <li className='list-item-custom'>USD</li>
                <li className='list-item-custom'>EUR</li>
                <li className='list-item-custom'>GBP</li>
                <li className='flex h-10 justify-center items-center'>
                    <svg width="17" height="11" viewBox="0 0 17 11">
                        <path d="M8.5 9.36454L2.03649 1H14.9635L8.5 9.36454Z" fill="#6A6A6A" stroke="#6A6A6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </li>
            </ol>
        </div>
    )

    render() {
        return (
            <div onClick={()=>{this.setState({modalOpen: !this.state.modalOpen})}} >
                <div className='shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-paletteGreen w-10 h-10 
                rounded-full text-sm font-bold text-paletteBG flex items-center justify-center'>
                    <span>HUF</span>
                </div>
                {this.state.modalOpen && (
                    <div className='modal-bg z-50'>
                        <div onClick={(e)=>{e.stopPropagation()}} 
                        className='bg-paletteGreen flex flex-col items-center justify-center 
                        modal-body w-64 h-72'>
                            <span>Currency</span>

                            {this.state.selectClicked ? this.closedSelect : this.openSelect}
                            
                        </div>
                    </div>
                )}
            </div>
        )
    }
}