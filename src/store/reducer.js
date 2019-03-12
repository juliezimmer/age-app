// this is the redux store

const initialState = {
   age: 21
}
// a reducer takes in two arguments:
// 1. state (needs a default parameter because the first time it runs, there is no state value yet)
// 2. action
const reducer = (state = initialState, action) => {
   // creates a copy of the state object
   const newState = {...state};

   return newState;
}

// Reducer is being exported to be used in other modules
export default reducer;