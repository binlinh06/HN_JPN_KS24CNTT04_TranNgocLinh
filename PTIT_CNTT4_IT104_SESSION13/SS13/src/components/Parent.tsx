import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  render() {
    return (
      <div>
        Component cha
        <Child name="Linh" age ="25"></Child>
      </div>
    )
  }
}
