import React, { Component } from "react";
// import Baitap7 from "./components/Ex7/Baitap7";
// import Controll from "./components/Controll";
// import Baitap5 from "./components/Ex5/Baitap5";
// import Baitap6 from "./components/Ex6/Baitap6";
// import Baitap8 from "./components/Ex8/Baitap8";
import Baitap9 from "./components/Ex9/Baitap9";
import Baitap10 from "./components/Ex10/Baitap10";
type initialState = {
  fullName: string;
};
export default class App extends Component<{}, initialState> {
  /*
  life cycle:Class component
  1.mount
  2.update
  3.unmount
  

  Form
  */
  constructor(props: {}) {
    super(props);
    this.state = {
      fullName: "Linh",
    };
  }
  componentDidMount(): void {
    console.log("componentDidMount dc goi");
    //Nơi thường dùng call API lấy data đưa vào DOM
  }
  changeName=()=>{
    this.setState({fullName:"Duy"})
  }
  shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<initialState>, nextContext: any): boolean {
    console.log("SCU dc goi")
    return true
  }
  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<initialState>, snapshot?: any): void {
    console.log("CDU dc goi")
  }
  componentWillUnmount(): void {
    //khi component bi remove khoi DOM
  }
  render() {
    console.log("compontent render lan dau");
    return (
      <div>
        {/* Class component
        <p>Ten SV:{this.state.fullName}</p>
        <button onClick ={this.changeName}>Change Name</button>
        <Controll></Controll>
        <hr/> */}
       {/* <Baitap5></Baitap5> */}
        {/* <Baitap6></Baitap6> */}
      {/* <Baitap7></Baitap7> */}
      {/* <Baitap8></Baitap8> */}
      <Baitap9></Baitap9>
      {/* <Baitap10></Baitap10> */}
      </div>
    );
  }
}
