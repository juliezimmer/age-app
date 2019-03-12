import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// the Provider allows us to inject the global store and it wraps the entire app (see below in ReactDOM.render()). 
// Whatever is passed to the Provider component (instance) is available globally.
import { Provider } from 'react-redux';

// needed for the Redux store
import {createStore } from 'redux';
import reducer from './store/reducer';

// Creating the store
const store = createStore(reducer);

// Now, the store needs to be passed as a property to the Provider instance and it will be available to the entoire application. 

ReactDOM.render(
   <Provider store={store} >
      <App />
   </Provider>,
document.getElementById('root'));

