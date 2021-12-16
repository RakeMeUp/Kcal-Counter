import React, { Component } from 'react'
import ListElement from './comps/listElement.jsx'

export default class App extends Component {
  render() {
    return (
      <div className='h-[200vh] px-3'>
        <div className='w-full flex justify-center my-6'>
          <span className='text-2xl text-paletteGray font-medium'>Food List</span>
        </div>
        <ListElement />
        <ListElement />
        <ListElement />
        <ListElement />
        <ListElement />
        <ListElement />
        <ListElement />
        <ListElement />
        <ListElement />
        <ListElement />
        <ListElement />
      </div>
    )
  }
}
