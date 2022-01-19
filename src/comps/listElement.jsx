import React, { Component, useEffect } from 'react'
import Meter from '../comps/meter'
import edit from '../img/edit.png'
import Description from './description'
import checkmark from '../img/checkmark.svg'
export default class listElement extends Component {
    constructor(props){
        super(props);
        this.state = { 
            listElementOpen: false,
            editNameOpen: false,
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

    NameInput=()=>{
        useEffect(() => {
            document.getElementById('nameInput').focus()
          }, []);

        return(
            <div onBlur={this.handleEditState} onClick={(e)=>{e.stopPropagation()}} className='flex relative w-28'>
                <input id='nameInput' type="text" maxLength={"20"} className='figShadow focus:outline-none focus:border-paletteGray focus:border-[1px] bg-paletteBG rounded-full 
                                                overflow-clip h-7 w-28 pl-4 pr-6 text-sm' />
                {/* onclick on this div */}
                <div onClick={this.handleEditState} className='group absolute right-0 pr-2 top-0 bottom-0 flex items-center'>
                    <button className='group-hover:bg-paletteGreen group-active:brightness-75 bg-paletteGray w-[17px] h-[17px] 
                                        rounded-full flex items-center justify-center'>
                        <img src={checkmark} alt="submit" />
                    </button>
                </div>
            </div>
        )
    }

    NameField = () => {
        return(
            <div className='relative text-2xl select-text'>
                <div className='overflow-clip'>
                    Banana
                </div>
                {this.state.listElementOpen && 
                (<div onClick={(e)=>{e.stopPropagation(); this.handleEditState()}} className='absolute top-0 -right-8 p-2' >
                    <img src={edit} alt="edit" width={"14px"} />
                </div>) }
                
            </div>
        )
    }

    render() {
        return (
            <div className='relative'>
                {/* function in class so i can toggle the corner rounding when open */}
                <div onClick={this.handleListElementClick} 
                    className={`relative rounded-[30px] ${this.cornerRounder()} 
                                my-2 bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-5 py-4`}>
                    <div className='flex w-full justify-between'>

                        {/* ITEM NAME */}
                        <div className='flex flex-col max-w-[33%]'>
                            {this.state.editNameOpen ? <this.NameInput /> : <this.NameField /> }
                            <span  className='text-lg text-paletteGray'>400g</span>
                        </div>

                        {/* ITEM KPP SCORE */}
                        <div>
                            <div className='flex'>
                                <span className='text-2xl '>KPP</span>
                                <Description />
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
            </div>
        )
    }
}
