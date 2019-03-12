// this is the redux store

const initialState = {
   age: 21,
   history: []
};
// a reducer takes in two arguments:
// 1. state (needs a default parameter because the first time it runs, there is no state value yet)
// 2. action
// This could also be written with a switch statement
const reducer = (state = initialState, action) => {
   // creates a copy of the state object
   const newState = {...state};
   
   switch (action.type) {
      case 'AGE_UP':
         return {
            ...state, // creates a copy of the state object
            age: state.age + action.value, // this is the payload, which is 1
            history: state.history.concat({age:state.age + action.value})
            // concat() is an array method that returns a new array
         }
         break;
      case 'AGE_DOWN':
         return {
            ...state, 
            age: state.age - action.value, 
            history: state.history.concat({
               id: Math.random(), 
               age:state.age - action.value
            })
         };
         break;
      case 'DELETE_ITEM':
         return {
            ...state,  
            // use array .filter() function
            history: state.history.filter(el => el.id !== action.key)
         }
         break;
   }
   return newState;
}

// Reducer is being exported to be used in other modules
export default reducer;

// if (action.type === 'AGE_UP') {
//    newState.age++;
// }
// if(action.type === 'AGE_DOWN') {
//    newState.age--;
// }
// return newState;