import React, { Component, useEffect } from 'react'
import Meter from './meter.jsx'
import Description from './description.jsx'
import edit from '../img/edit.png'
import checkmark from '../img/checkmark.svg'
export default class ListElement extends Component {
    constructor(props){
        super(props);
        this.state = { 
            listElementOpen: false,
            editNameOpen: false,
            nameChangeText: "",
        };

    }
    handleListElementClick = () => {
        this.setState({ listElementOpen: !this.state.listElementOpen });
    }
    
    handleEditState=()=>{
        this.setState({editNameOpen: !this.state.editNameOpen})
    }

    cornerRounder = () =>{
        return this.state.listElementOpen ? "rounded-br-[80px]" : ""
    }

    AdditionalComponent= ()=>{
        return (
            <div className=' mt-4 relative before:absolute before:bg-paletteLightGray before:h-[1px] before:w-full before:rounded-full'>
                <div className='pt-4 flex justify-evenly text-sm font-medium text-paletteGray'>                
                    <div>
                        <span>Protein: </span>
                        <span className='text-black'>{this.props.additional.protein}</span>
                    </div>
                    <div>
                        <span>Carbs: </span>
                        <span className='text-black'>{this.props.additional.carbs}</span>
                    </div>
                    <div>
                        <span>Fat: </span>
                        <span className='text-black'>{this.props.additional.fat}</span>
                    </div>
                </div>
            </div>
        )
    }

    NameField = () => {

        return(
            <div className='relative text-2xl select-text'>
                <div className='overflow-clip'>
                    {this.props.name}
                </div>
                {this.state.listElementOpen && 
                    (<div onClick={(e)=>{e.stopPropagation(); this.handleEditState()}} className='absolute top-0 -right-8 p-2' >
                        <img src={edit} alt="edit" width={"14px"} height={"14px"} />
                    </div>)
                }
                
            </div>
        )
    }

    NameChangeField = () =>{
        
        useEffect(()=>{
            document.querySelector("#nameChangeInput").focus()
        },[])

        const handleSubmit=(e)=>{
            e.preventDefault();
            this.props.nameChange(this.props.id, this.state.nameChangeText);
            this.setState({nameChangeText: ""})
            this.handleEditState();
            
        }

        const handleChange=(e)=>{
            this.setState({nameChangeText: e.target.value})
        }

        return(
            <form onSubmit={handleSubmit} onClick={(e)=>{e.stopPropagation()}} className='flex w-full relative'>
                <label>
                    <input type="text" 
                            id='nameChangeInput'
                            className='inputText h-8 w-full'
                            value={this.state.nameChangeText}
                            onChange={handleChange} />
                    <div className='absolute right-2 top-0 bottom-0 flex items-center justify-center'>
                        <button type="submit" className='bg-paletteGreen p-1 rounded-full'>
                            <img src={checkmark} alt="ok" width={"14px"} />
                        </button>
                    </div>
                </label>
            </form>
        )
    }


    render() {
        return (
            <li className='relative list-none md:max-w-xl md:w-[500px] w-full'>
                {/* function in class so i can toggle the corner rounding when open */}
                <div onClick={this.handleListElementClick} 
                    className={`relative rounded-[30px] ${this.cornerRounder()} 
                                my-2 bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-5 py-4`}>
                    <div className='flex w-full justify-between'>

                        {/* ITEM NAME */}
                        <div className='flex flex-col max-w-[33%]'>
                            {this.state.editNameOpen ? <this.NameChangeField/> : <this.NameField/>}
                            <span  className='text-lg text-paletteGray'>{this.props.amount}</span>
                        </div>

                        {/* ITEM KPP SCORE */}
                        <div>
                            <div className='flex'>
                                <span className='text-2xl '>KPP</span>
                                <Description />
                            </div>
                            <span className='text-lg text-paletteGray'>{this.props.kpp}</span>
                        </div>

                        {/* ITEM SCORE METER */}
                        <Meter meterNumber={this.props.meter} />
                    </div>

                    {/* AdditionalComponent Information (displays on click) */}
                    {this.state.listElementOpen && <this.AdditionalComponent />} 

                    {/* Displays when element Open */}
                    {this.state.listElementOpen && 
                    /* negative z index ensures that children div is under parent, while you dont have to
                        set z index on parent, avoiding further collisions */
                        <div className='bg-paletteRed -z-10 absolute bottom-0 right-0 
                                        w-20 h-20 flex items-end justify-end rounded-md'>
                            {/* invert png so its white (lazy bones) */}
                            <img className='w-5 m-[6px] invert-[1]' src={edit} alt="asd" />
                        </div>
                    }
                </div>
            </li>
        )
    }
}

ListElement.defaultProps = {
    name: "Name",
    kpp: "N/A",
    amount: "N/A",
    meter: 1,
    additional: {
        protein: "N/A",
        carbs: "N/A",
        fat: "N/A",
    }
    
}