import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';


//import { increaseVotesById } from './actions';
//import { decreaseVotesById } from './actions';
//import { orderByMoreVotes } from './actions';
const store = createStore(rootReducer);
//console.log('store.getState()', store.getState());

//store.subscribe(() => console.log('store', store.getState()));
//store.dispatch(orderByMoreVotes());




ReactDOM.render(
 <Provider store={store}>   
  <App/>
 </Provider>,
document.getElementById('root')
);


