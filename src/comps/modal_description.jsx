import React, { Component } from 'react'
import icon from '../img/Help.svg'

export default class description extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalOpen: false,
            zIndex: ""
        }
    }

    handleClick=(e)=>{
        e.stopPropagation();
        this.setState({
            modalOpen: !this.state.modalOpen,
            zIndex: "z-50"
        })
    }

    render() {
        return (
            <div onClick={this.handleClick} className='flex justify-center items-center'>
                <img className='ml-1' src={icon} alt="help" width="14px" />
                {this.state.modalOpen && (
                    /* saved z index in state so other list elements wont stay on top */
                    <div className={`modal-bg ${this.state.zIndex} `}>
                        <div onClick={(e)=>{e.stopPropagation()}} 
                        className='bg-paletteGray modal-body flex flex-col items-center justify-center 
                         w-64 h-72'>
                            asd
                        </div>
                    </div>
                )}
            </div>

        )
    }
}
