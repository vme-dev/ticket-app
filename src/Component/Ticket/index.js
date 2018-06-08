import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import {bindActionCreator} from 'redux';

import * as action from "../../action.js";
import TicketCard from './TicketCard';


class Ticket extends Component {
  constructor(props) {
    super(props);
    this.info;
    }
  componentWillMount() {
    alert("1");
    let promise = new Promise((resolve, reject) => {

    
      // переведёт промис в состояние fulfilled с результатом "result"
      
    var xhr = new XMLHttpRequest();

    xhr.open('GET', '/info.json', true);

    xhr.send(); 

    xhr.onreadystatechange = function() {
     // (3)
      if (xhr.readyState != 4) return;

      if (xhr.status != 200) {
        alert("err");
      } else {
        resolve(xhr.responseText);
      }
    }

    });




    promise
  .then(
    result => {
      // первая функция-обработчик - запустится при вызове resolve
      
      this.props.load(result);
       // result - аргумент resolve
    },
    error => {
      // вторая функция - запустится при вызове reject
      alert("Rejected: " + error); // error - аргумент reject
    }
  );



  }

	render () {
    var dataJSON = this.props.index.serverData;
      
    if (dataJSON == null) {
      return <div className="ticket">load...</div>
    }

    function compareNumeric(a, b) {
      if (a.stops > b.stops ) return 1;
      if (a.stops < b.stops ) return -1;
    }
    function cN(a, b) {
      if (a.stops != b.stops) {return}
      if (a.price > b.price ) return 1;
      if (a.price < b.price ) return -1;
    }

    dataJSON.sort(compareNumeric);
    dataJSON.sort(cN);

    var all = this.props.index.all == undefined? true: this.props.index.all;
    //alert(all.toString());

    var a = dataJSON.map((user) => {

      if ( (this.props.index.transferArr.indexOf(user.stops.toString()) != -1) || all ) {
        return <TicketCard  data={user} currency={this.props.index.currency} currencyName={this.props.index.currencyName}/>
      } 
      
    })


		return (
		<div className="ticket">

			{a}

		</div>)
  }
}

export default connect(
  (store) => {return {
    index: store.counter,
  }},
  (dispatch) => {return {
    onTudaClick: (e)     => { dispatch(action.CHANGE_STOPS(e)); },
    loadData: (data)     => { dispatch(action.LOAD_DATA(data)); },
    load: (data)     => { dispatch(action.LOAD(data)); }
    // onResetClick: ()    => { dispatch(action.RESET()); },
    // onCheckDate: (date) => { dispatch(action.CHECK_CURR_DAY(date)); },
    // onModal: ()         => { dispatch(action.togleModal()); }
  }}
  
  )(Ticket);