import React from "react";

class App extends React.Component{
  state = {
    count : 0
  };

  add = () =>{
    this.setState( x => ({count: x.count + 1}));
  };
  
  sub = () =>{
    this.setState( x => ({count: x.count - 1})); // setstate호출시 render을 다시 호출
  };

  render(){
    return (
      <div>
        <h1>Class coponent {this.state.count}</h1>
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
      </div>
    );
  }
}

export default App;
