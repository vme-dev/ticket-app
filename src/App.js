import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import {bindActionCreator} from 'redux';

import * as action from "./action.js";
import Menu from './Component/Menu';
import Ticket from './Component/Ticket';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Aviasales</h1>
        </header>

        <div className="content">
          <Menu />
          <Ticket loadF={(data) => this.props.loadData(data)} />
        </div>

      </div>
    );
  }
}

export default connect(
  (store) => {return {
    index: store.appState,
  }},
  (dispatch) => {return {
    loadData: (data)     => { dispatch(action.LOAD_DATA(data)); }
  }}
  
  )(App);