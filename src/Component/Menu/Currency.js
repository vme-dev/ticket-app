import React from 'react';

export default function (props) {
	return (
		<div>
		<h3 className="curr_head">Currency</h3>
		<div className="menu_currency_wrap">
		<ul className='menu_currency_list'>
			<li className={"currency_item " + (props.curr === "rub"?"action":"")} data-curr="rub" onClick={()=>{props.onClick("rub")}}>RUB</li>
			<li className={"currency_item " + (props.curr === "usd"?"action":"")} onClick={()=>{props.onClick("usd")}}>USD</li>
			<li className={"currency_item " + (props.curr === "eur"?"action":"")} onClick={()=>{props.onClick("eur")}}>EUR</li>

		</ul></div></div>
		);
}