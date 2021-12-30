import React, { Component } from 'react'
import help from '../img/Help.svg'
import Meter from '../comps/meter'

export default class listElement extends Component {
    constructor(props)
    {
        super(props);
        this.state = { flag: false };

    }
    
    handleClick = () => {
        if(this.state.flag){
            /* OPEN IT */
            this.setState({
                flag: false
            });
        }else{
            /* CLOSE IT */
            this.setState({
                flag: true
            })
        }
    }

    additional(){
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

    render() {
        return (
            <div onClick={this.handleClick} className={`h-[${this.state.heigth}] rounded-[30px] my-2 bg-white shadow-md px-5 py-4`}>
                <div className='flex w-full justify-between'>
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
                        <Meter meterNumber={this.props.meter} />
                    </div>
                 </div>
                {/* Additional Information (displays on click) */}
                {this.state.flag && this.additional()} 
            </div>
        )
    }
}
