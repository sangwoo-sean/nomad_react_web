import React from "react";

class App extends React.Component{
  state = {
    isLoading : true
  };

  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 3000);
  }

  render(){
    const { isLoading } = this.state; // this.state에서 isLoading 을 가져와서 isLoading에 저장
    return (
      <div>
        <h1>{isLoading ? "This Page is Loading" : "Welcome!"}</h1>
      </div>
    );
  }
}

export default App;
