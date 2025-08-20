import React, { Component } from 'react'
type Props = {
    name:string
    age:string
}
export default class Child extends Component<Props> {
  render() {
    console.log("Nhan ve tu component cha",this.props);
    const {name,age} = this.props;
    return (
      <div>
        Component con
        <p>Gia tri fullname tu component cha:{this.props.name}</p>
        <p>Gia tri tuoi:{age}</p>
      </div>
    )
  }
}
