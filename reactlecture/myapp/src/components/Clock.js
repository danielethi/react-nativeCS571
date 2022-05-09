import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    console.log("a constructor is called")
    this.state = {
      time: new Date(),
    };
  }
  tick = () => {
    this.setState({ time: new Date()});
  };

  componentDidMount() {
      console.log("clock did mount")
    //   setInterval(()=>this.setState(({time:new Date()})),1000) or
     this.interval= setInterval(this.tick,1000)
  }
  componentWillUnmount(){
      console.log("clock unmount")
      clearInterval(this.interval)
  }
  render() {
    console.log("reander is called")
    return (
      <div>
        <p>Time:{this.state.time.toLocaleTimeString()}</p>
      </div>
    );
  }
}
