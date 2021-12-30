import React, { Component } from 'react'
import ListElement from './comps/listElement.jsx'

export default class App extends Component {
  render() {
    return (
      <div className='px-3 mb-28'>
        <div className='w-full flex justify-center my-6'>
          <span className='text-2xl text-paletteGray font-medium'>Food List</span>
        </div>
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
