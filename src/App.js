import React, { Component } from 'react'
import ListElement from './comps/listElement.jsx'
import Modal from './comps/modal.jsx'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      kppModalOpen: false,
      currencyModalOpen: false
    }
  }

  handleKppToggle = () => {
    this.setState({
      KppModalOpen: !this.state.KppModalOpen
    })
  }
  
  handleCurrencyToggle = () => {
    this.setState({
      currencyModalOpen: !this.state.currencyModalOpen
    })
  }

  render() {
    return (
      <div className='px-3 mb-28'>

        {/* KPP Modal */}
        {this.state.KppModalOpen &&
          <Modal bgColor={"bg-paletteGray"} handleClose={this.handleKppToggle}>
            <div className={"text-white text-lg text-center"}>
              KPP is calculated by Kalorie per your selected Currency 
            </div>
          </Modal>
        }

        {/* Currency Modal */}
        {this.state.currencyModalOpen &&
          <Modal bgColor={"bg-paletteGreen"} handleClose={this.handleCurrencyToggle}>
            <div className={"text-white flex flex-col items-center text-xl text-center"}>
              Set Currency
              <input type="text" placeholder='e.g. USD' className='mt-3 w-28 h-10 rounded-full text-sm p-3 text-black text-center' />
            </div>
          </Modal>
        }

        {/* Title Bar */}
        <div className='w-full flex justify-center my-6'>
          <div className='relative flex justify-center w-full '>

            <span className='text-2xl text-paletteGray font-medium '>Food List</span>

            <div className='flex items-center justify-end absolute inset-0'>
              <div onClick={this.handleCurrencyToggle} className='flex text-sm mr-4 text-paletteBG bg-paletteGreen font-bold justify-center items-center shadow-md w-10 h-10 rounded-full'>
                HUF
              </div>
            </div>
          </div>
        </div>

        {/* List elements */}
        <div id="container">
        <ListElement meter={10} handleClose={this.handleKppToggle}/>
        <ListElement meter={7} handleClose={this.handleKppToggle}/>
        <ListElement meter={9} handleClose={this.handleKppToggle}/>
        <ListElement meter={4} handleClose={this.handleKppToggle}/>
        <ListElement meter={2} handleClose={this.handleKppToggle}/>
        </div>
      </div>
    )
  }
}
