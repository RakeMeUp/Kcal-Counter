import React, { Component } from 'react'
import help from '../img/Help.svg'
import Meter from '../comps/meter'
import edit from '../img/edit.png'

export default class listElement extends Component {
    constructor(props)
    {
        super(props);
        this.state = { 
            listElementOpen: false,
        };

    }

    handleKppModal = (e) => {
        e.stopPropagation()
        this.props.handleClose()
    }
    
    handleListElementClick = () => {
        this.setState({ listElementOpen: !this.state.listElementOpen });
    }

    cornerRounder = () =>{
        return this.state.listElementOpen ? "rounded-br-[80px]" : ""
    }

    AdditionalComponent(){
        return (
            <div className=' mt-4 relative before:absolute before:bg-paletteLightGray before:h-[1px] before:w-full before:rounded-full'>
                <div className='pt-4 flex justify-evenly text-sm font-medium text-paletteGray'>                
                    <div>
                        <span>Protein: </span>
                        <span className='text-black'>10g</span>
                    </div>
                    <div>
                        <span>Carbs: </span>
                        <span className='text-black'>10g</span>
                    </div>
                    <div>
                        <span>Fat: </span>
                        <span className='text-black'>10g</span>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className='relative'>
                {/* function in class so i can toggle the corner rounding when open */}
                <div onClick={this.handleListElementClick} className={`relative z-10 rounded-[30px] ${this.cornerRounder()} my-2 bg-white shadow-md px-5 py-4`}>
                    <div className='flex w-full justify-between'>

                        {/* ITEM NAME */}
                        <div className='flex flex-col'>
                            <span className='text-2xl select-text'>Banana</span>
                            <span className='text-lg text-paletteGray'>400g</span>
                        </div>

                        {/* ITEM KPP SCORE */}
                        <div className='flex flex-col'>
                            <div onClick={this.handleKppModal} className='flex'>
                                <span className='text-2xl '>KPP</span>
                                <img className='ml-1' src={help} alt="help" width="14px" />
                            </div>
                            <span className='text-lg text-paletteGray'>5.6</span>
                        </div>

                        {/* ITEM SCORE METER */}
                        <div className='relative'>
                            <Meter meterNumber={this.props.meter} />
                        </div>
                    </div>

                    {/* AdditionalComponent Information (displays on click) */}
                    {this.state.listElementOpen && <this.AdditionalComponent />} 
                </div>
                {/* Displays when element Open */}
                {this.state.listElementOpen && 
                    <div className='z-1 bg-paletteRed absolute bottom-0 right-0 w-20 h-20 flex items-end justify-end rounded-md'>
                        {/* invert png so its white (lazy bones) */}
                        <img className='w-5 m-[6px] invert-[1]' src={edit} alt="asd" />
                    </div>
                }
            </div>
        )
    }
}
