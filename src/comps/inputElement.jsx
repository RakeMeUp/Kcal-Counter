import React, { Component } from 'react';

export default class InputElement extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputText: "",
        }
    }

    //focus on mount so when clicked anywhere, it fires onBlur
    componentDidMount(){
        document.querySelector("#inputBox").focus()
    }

    render() {
        return(
            <input  className={`${this.props.classes} input rounded-full px-5 bg-paletteBG figShadow text-sm focus:outline-none focus:border-[1px] focus:border-black`}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    maxLength={this.props.maxL}
                    id='inputBox'
                    onBlur={this.props.handleBlur}
                    value={this.state.inputText}
                    name={this.props.name}
                    onChange={(e)=>{ this.props.updateState(this.props.name, e.target.value); this.setState({inputText: e.target.value}) }}
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
