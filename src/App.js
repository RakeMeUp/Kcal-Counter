import React, { Component } from 'react'
import ListElement from './comps/listElement.jsx'
import CurrencyButton from './comps/currencyButton.jsx'

export default class App extends Component {

  render() {
    return (
      <div className='px-3 mb-28'>

        {/* Title Bar */}
        <div className='relative w-full flex justify-center my-6'>
          <div className='flex justify-center w-full'>
            <span className='text-2xl text-paletteGray font-medium '>Food List</span>
          </div>
          <div className='absolute inset-0 flex flex-row-reverse items-center pr-4'>
            <CurrencyButton />
          </div>
        </div>

        {/* List elements */}
        <div id="container">
        <ListElement meter={10}/>
        <ListElement meter={7}/>
        <ListElement meter={9}/>
        <ListElement meter={4}/>
        <ListElement meter={2}/>
        </div>
      </div>
    )
  }
}
