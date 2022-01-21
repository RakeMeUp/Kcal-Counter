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
