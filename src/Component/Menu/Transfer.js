import React from 'react';

export default function (props) {
	console.log(props);
	var a = props.store.all?"action":"";
	var b = "action";


	return (
		<div>
		<h3 className="curr_head">Stops</h3>
		<ul className='menu_transfer_list'>

		<li className={"transfer_item " + (props.store.all?"action":"")} data-transfer="all" onClick={(e)=>{var a = e.target;props.onClickAll(a)}}>
			<span className="transfer_checkbox"><i class="fas fa-check"></i></span><span className="curr_text">All</span>
		</li>
		<li className={"transfer_item " + (props.store.transferArr[0]&&!props.store.all?"action":"")} data-transfer="0" onClick={(e)=>{var a = e.target;console.log(a);props.onClick(a,"0")}}>
			<span className="transfer_checkbox"><i class="fas fa-check"></i></span><span className="curr_text">0 transfer</span><span className="transfer_only " onClick={()=>{props.onClickOnly("0")}} >Only</span>
		</li>
		<li className={"transfer_item " + (props.store.transferArr[1]&&!props.store.all?"action":"")} data-transfer="1" onClick={(e)=>{var a = e.target;props.onClick(a,"1")}}>
			<span className="transfer_checkbox"><i class="fas fa-check"></i></span><span className="curr_text">1 transfer</span><span className="transfer_only" onClick={()=>{props.onClickOnly("1")}}>Only</span>
		</li>
		<li className={"transfer_item " + (props.store.transferArr[2]&&!props.store.all?"action":"")} data-transfer="2" onClick={(e)=>{var a = e.target;props.onClick(a,"2")}}>
			<span className="transfer_checkbox"><i class="fas fa-check"></i></span><span className="curr_text">2 transfer</span><span className="transfer_only" onClick={()=>{props.onClickOnly("2")}}>Only</span>
		</li>
		<li className={"transfer_item " + (props.store.transferArr[3]&&!props.store.all?"action":"")} data-transfer="3" onClick={(e)=>{var a = e.target;props.onClick(a,"3")}}>
			<span className="transfer_checkbox"><i class="fas fa-check"></i></span><span className="curr_text">3 transfer</span><span className="transfer_only" onClick={()=>{props.onClickOnly("3")}}>Only</span>
		</li>

		</ul>
		</div>
		);
}