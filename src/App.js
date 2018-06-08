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
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
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
    index: store.counter,
  }},
  (dispatch) => {return {
    onTudaClick: (e)     => { dispatch(action.CHANGE_STOPS(e)); },
    loadData: (data)     => { dispatch(action.LOAD_DATA(data)); }
    // onResetClick: ()    => { dispatch(action.RESET()); },
    // onCheckDate: (date) => { dispatch(action.CHECK_CURR_DAY(date)); },
    // onModal: ()         => { dispatch(action.togleModal()); }
  }}
  
  )(App);