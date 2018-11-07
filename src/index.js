import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './media.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import  reduser  from './reduser';

let store = createStore(reduser);

ReactDOM.render(
	<Provider store={store}>
    	<App />
  	</Provider>, 
  	document.getElementById('root'));

