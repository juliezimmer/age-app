import React, { Component } from 'react';
import './App.css';

class App extends Component {
   
   state = {
      age: 21
   }
   
   // event handler to increase the age
   // this handler will take the current state.age and increases it by 1
   // this function also goes in the 'Age Up' opening button  tag as the onClick event handler
   onAgeUp = () => {
      this.setState({
         ...this.state,
         age: ++this.state.age
      });
   }

   onAgeUp = () => {
      this.setState({
         ...this.state,
         age: ++this.state.age
      });
   }
   render() {
      return (
         <div className="App">
            <div>Age: <span>{this.state.age}</span></div>
            <button onClick={this.onAgeUp}>Age Up</button>
            <button>Age Down</button>
         </div>
      );
   }
}

export default App;
