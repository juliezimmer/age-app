import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
   
   // state = {
   //    age: 21
   // }
   
   // event handler to increase the age
   // this handler will take the current state.age and increases it by 1
   // this function also goes in the 'Age Up' opening button  tag as the onClick event handler
   // onAgeUp = () => {
   //    this.setState({
   //       ...this.state,
   //       age:++this.state.age
   //    });
   // }
   
   // event handler to decrease the age
   // this handler will take the current state.age and decrease it by 1
   // this function also goes in the 'Age Down' opening button  tag as the onClick event handler
   // onAgeDown = () => {
   //    this.setState({
   //       ...this.state,
   //       age: --this.state.age
   //    });
   // }
   render() {
      return (
         <div className="App">
            <div>Age: <span>{this.props.age}</span></div>
            <button onClick={this.props.onAgeUp}>Age Up</button>
            <button onClick={this.props.onAgeDown}>Age Down</button>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      age: state.age
   }
}
const mapDispatchToProps = (dispatch) => {
   // this returns the mapped object
   return {
      onAgeUp: () => dispatch({ type: 'AGE_UP'}),
      onAgeDown: () => dispatch({ type: 'AGE_DOWN'})
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
