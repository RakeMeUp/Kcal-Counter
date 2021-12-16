import React from 'react'

export default function meter() {
    return (
        <div className='relative'>
        <svg id="meter" className='h-[70px] w-[70px]'>
            <circle cx="35" cy="35" r="30" stroke-linecap="round"/>
        </svg>
        <svg id="meter-bg" className='h-[70px] w-[70px]'>
            <circle cx="35" cy="35" r="30" stroke-linecap="round"/>
        </svg>
    </div>
    )
}
