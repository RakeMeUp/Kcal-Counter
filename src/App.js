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

  /* making a copy of the state, and we work on that, to avoid mutating the state */
  nameChange=(id, text)=>{
    let tempListElArray = [...this.state.listElements];
    tempListElArray[id].name = text;
    this.setState({listElements: tempListElArray})
  }
  
  EmptyList =()=>{
    return (
      <div className='fixed mt-20 inset-0 flex items-center justify-center'>
        <div className='w-60 text-center mb-40'>
          <span className='text-2xl font-bold text-gray-400 '>
            Add a new Item with the Plus Button below.
          </span>
        </div>
      </div>
    )
  }


  render() {
    return (
      <div className='flex flex-col'>

          {/* Title Bar */}
          <header className='relative w-full flex justify-center py-6'>
            <div className='flex justify-center w-full'>
              <span className='text-2xl text-paletteGray font-medium '>Food List</span>
            </div>
            <div className='absolute inset-0 flex flex-row-reverse items-center pr-4'>
              <CurrencyButton handleCurrencyChange={this.handleCurrencyChange} currentCurrency={this.state.actualCurrency} />
            </div>
          </header>

          {/* List elements */}
          <main id="container" className='flex flex-col md:items-center'>
            <ol>
              {
                this.state.listElements.length ? this.state.listElements.map((listEl, index)=>{
                  return <ListElement 
                          name={listEl.name} 
                          kpp={listEl.kpp} 
                          amount={listEl.amount} 
                          meter={listEl.meter} 
                          additional={listEl.additional}
                          key={index}
                          id={index}
                          nameChange={this.nameChange}
                          /> 
                }) : (
                      <this.EmptyList/>
                      )
              }
            </ol>
          </main>
        <Navbar addItem={this.addItem}/>
      </div>
    )
  }
}

