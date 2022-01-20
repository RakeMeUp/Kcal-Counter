/* import React from 'react';
import checkmark from '../img/checkmark.svg'

export default function inputElement(props) {
        useEffect(() => {
            document.getElementById('nameInput').focus()
          }, []);

        return(
            <div onBlur={props.handleEditState} onClick={(e)=>{e.stopPropagation()}} className='flex relative w-28'>
                <input placeholder='Name' id='nameInput' type="text" maxLength={"20"} className='figShadow focus:outline-none focus:border-paletteGray focus:border-[1px] bg-paletteBG rounded-full 
                                                overflow-clip h-7 w-28 pl-4 pr-6 text-sm' />
                {}
                <div onClick={props.handleEditState} className='group absolute right-0 pr-2 top-0 bottom-0 flex items-center'>
                    <button className='group-hover:bg-paletteGreen group-active:brightness-75 bg-paletteGray w-[17px] h-[17px] 
                                        rounded-full flex items-center justify-center'>
                        <img src={checkmark} alt="submit" />
                    </button>
                </div>
            </div>
        )
}
 */

import React, { Component } from 'react';

export default class InputElement extends Component {

    componentDidMount(){
        document.getElementById("inputBox").focus()
    }

    render() {
        return(
            <input  className={`${this.props.classes} input rounded-full px-5 bg-paletteBG figShadow text-sm focus:outline-none focus:border-[1px] focus:border-black`}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    maxLength={this.props.maxL}
                    id='inputBox'
                    onBlur={this.props.handleBlur}
                    />
    )
  }
}

InputElement.defaultProps = {
    maxL: "20",
    classes: "h-10",
    type: "text",
    placeholder: "Text",
}
