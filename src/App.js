import React, { Component } from 'react'
import ListElement from './comps/listElement.jsx'
import CurrencyButton from './comps/currencyButton.jsx'
import Navbar from './comps/navbar'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentCurrency: "HUF",
      listElements: [] 
    }
  }

  handleCurrencyChange=(arg)=>{
    this.setState({actualCurrency: arg})
  }

  addItem=(item)=>{
    this.setState({listElements: [...this.state.listElements, item]})
  }



  render() {
    return (
      <>
      <Navbar addItem={this.addItem}/>
      <div className='px-3 mb-28'>

        {/* Title Bar */}
        <div className='relative w-full flex justify-center my-6'>
          <div className='flex justify-center w-full'>
            <span className='text-2xl text-paletteGray font-medium '>Food List</span>
          </div>
          <div className='absolute inset-0 flex flex-row-reverse items-center pr-4'>
            <CurrencyButton handleCurrencyChange={this.handleCurrencyChange} currentCurrency={this.state.actualCurrency} />
          </div>
        </div>

        {/* List elements */}
        <div id="container">
          {
            this.state.listElements ? this.state.listElements.map((listEl, index)=>{
              return <ListElement 
                      name={listEl.name} 
                      kpp={listEl.kpp} 
                      amount={listEl.amount} 
                      meter={listEl.meter} 
                      additional={listEl.additional}
                      key={index}
                      /> 
            }) : (
                  <div>Hello</div>
                  )
          }
        </div>
      </div>
      </>
    )
  }
}

