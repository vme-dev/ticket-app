import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import {bindActionCreator} from 'redux';

import * as action from "../../action.js";
import Currency from './Currency';
import Transfer from './Transfer';


class Menu extends Component {
  constructor(props) {
    super(props);
    this.info;
    }
	render () {
    
		return (
		<div className="menu">
    <div className="menu_wrap">
		<Currency onClick={(e,value) => this.props.changeCurrency(e,value)} curr={this.props.index.counter.currencyName} />
		<Transfer onClick={(e,index) => this.props.changeStops(e,index)}  onClickAll={(e) => this.props.changeAll(e)} store={this.props.index.counter} onClickOnly={(index) => this.props.changeOnly(index)}/>
    
		</div></div>
		)}
}

export default connect(
  (store) => {return {
    index: store,
  }},
  (dispatch) => {return {
    changeStops: (e,index)     => { dispatch(action.CHANGE_STOPS(e,index)); },
    changeAll: (e)     => { dispatch(action.CHANGE_ALL(e)); },
    changeCurrency: (e,value)     => { dispatch(action.CHANGE_CURRENCY(e,value)); },
    changeOnly: (index)     => { dispatch(action.CHANGE_ONLY(index)); }
    // onResetClick: ()    => { dispatch(action.RESET()); },
    // onCheckDate: (date) => { dispatch(action.CHECK_CURR_DAY(date)); },
    // onModal: ()         => { dispatch(action.togleModal()); }
  }}
  
  )(Menu);