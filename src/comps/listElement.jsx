import React, { Component } from 'react'
import help from '../img/Help.svg'
import Meter from '../comps/meter'

export default class listElement extends Component {
    render() {
        return (
            <div className='flex w-full justify-between h-[100px] rounded-[30px] my-2 bg-white shadow-md px-5 py-4'>
                {/* ITEM NAME */}
                <div className='flex flex-col'>
                    <span className='text-2xl'>Banana</span>
                    <span className='text-lg text-paletteGray'>400g</span>
                </div>
                {/* ITEM KPP SCORE */}
                <div className='flex flex-col'>
                    <div className='flex'>
                        <span className='text-2xl '>KPP</span>
                        <img className='ml-1' src={help} alt="help" width="14px" />
                    </div>
                    <span className='text-lg text-paletteGray'>5.6</span>
                </div>
                {/* ITEM SCORE METER */}
                <div className='relative'>
                    <Meter meterNumber="11" />
                </div>
            </div>
        )
    }
}
