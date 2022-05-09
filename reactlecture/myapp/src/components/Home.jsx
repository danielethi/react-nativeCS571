import React, { Component } from 'react'
import Clock from './Clock';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      counter:0,
      isShowing:true
    }
  }
  increament=()=>{
    this.setState({counter:this.state.counter+1})
  }
  decrement=()=>{
    this.setState({counter:this.state.counter-1})
  }

  showHide=()=>{
     this.setState({...this.state,isShowing:!this.state.isShowing})
  }

  render() {
    return (
      <>
      <h3>Increment and Decrement</h3>
      <p>  Number:{this.state.counter}</p>
      <button  onClick={this.increament}>Increase</button>
      <button  onClick={this.decrement}>Decrement</button>
       <button onClick={this.showHide}>Show/Hide</button> 
       {this.state.isShowing ? <Clock />  :null}

      </>
      
        )
     }
  }
