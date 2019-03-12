import React, { Component } from 'react';
import './App.css';
// connect() is a function that returns a higher-order component.
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
            <div className="age">
               Your Age: <span>{this.props.age}</span>
            </div>
         
            <button 
               className="ageUp" 
               onClick={this.props.onAgeUp}>
               Age Up
            </button>
            <button 
               className="ageDown" 
               onClick={this.props.onAgeDown}>
               Age Down
            </button>
            <hr />
            <div>History</div>
            <div>
               <ul>
                  {this.props.history.map((el) => (
                      <li className="historyItem" key={el.id} > {el.age} </li>))}
               </ul>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return { // these are the props in the state object
      age: state.age,
      history: state.history

   }
}
const mapDispatchToProps = (dispatch) => {
   // this returns the mapped object
   return {
      onAgeUp: () => dispatch({ type: 'AGE_UP', value: 1}),
      onAgeDown: () => dispatch({ type: 'AGE_DOWN', value: 1})
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
