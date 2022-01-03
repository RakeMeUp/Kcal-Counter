import React, { Component } from 'react'
import close from '../img/close.svg'

export default class modal extends Component {

    render() {
        return(
            /* opaque background */
            <div onClick={this.props.handleClose} className='absolute flex justify-center items-center z-50 inset-0 bg-black bg-opacity-25 '>

                {/* modal body */}
                <div onClick={(e)=>{e.stopPropagation()}} className={`relative ${this.props.bgColor} rounded-[30px] px-5 py-10 mx-7 shadow-[0_0_10px_10px_rgba(0,0,0,0.5)]`}>

                    {/* Close */}
                    <div onClick={this.props.handleClose} className='absolute top-2 right-2 w-8 h-8 flex justify-center items-center rounded-full bg-paletteBG'>
                        <img src={close} alt="close" />
                    </div>

                    {/* Content */}
                    {this.props.children}
                </div>
            </div>
        )
    }
}
