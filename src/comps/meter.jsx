import React, { Component } from 'react'

export default class meter extends Component {

    num = this.props.meterNumber;

    colorChanger() {
        /* TIER 1 */
        if(this.num >= 1 && this.num <= 3 ){
            return {stroke: "var(--meter-red)",
                    strokeDashoffset: 220 - this.num * 13.2 + "px" }
        }
        /* TIER 2 */
        else if(this.num > 3 && this.num <= 5 ){
            return {stroke: "var(--meter-yellow)",
                    strokeDashoffset: 220 - this.num * 13.2 + "px"}
        }
        /* TIER 3 */
        else if(this.num > 5 && this.num <= 8 ){
            return {stroke: "var(--meter-orange)",
                    strokeDashoffset: 220 - this.num * 13.2 + "px"}
        }
        /* TIER 4 */
        else if(this.num > 8 && this.num <= 10 ){
            return {stroke: "var(--meter-green)",
                    strokeDashoffset: 220 - this.num * 13.2 + "px"}
        }
        /* ERROR CASE */
        else{
            return {stroke: "var(--meter-red)"}
        }
    }

    render() {
        return (
            /* METER */
            <div className='relative' >
                <svg id="meter" className='h-[70px] w-[70px]' style={this.colorChanger()}>
                    <circle cx="35" cy="35" r="30" strokeLinecap="round"/>
                </svg>
    
                {/* GRAY EMPTY METER */}
                <svg id="meter-bg" className='h-[70px] w-[70px]'>
                    <circle cx="35" cy="35" r="30" strokeLinecap="round"/>
                </svg>
                {/* METER NUMBER */}
                <div className='absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-3xl'>
                    {this.num <= 10 && this.num > 0 ? this.num : "Err"}
                </div>
            </div>
        )
    }
}
