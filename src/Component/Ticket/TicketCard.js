import React from 'react';
var p = "RUB";
export default function (props) {
	return (
		<div className="wrap_t_card">
			<div className="l_side">
				<div className="img">image</div>
				<div className="sale_btn"><div className="buy">Buy</div> for <span>{(props.data.price * props.currency).toString()} {props.currencyName.toString()}</span> </div>
			</div>
			<div className="r_side">
				<div className="departure">
					<div className="departure_time">{props.data.departure_time}</div>
					<div className="origin">{props.data.origin},{props.data.origin_name}</div>
					<div className="departure_date">{props.data.departure_date}</div>
				</div>
				<div className="stops">{props.data.stops}</div>
				<div className="arrival">
					<div className="arrival_time">{props.data.arrival_time}</div>
					<div className="destination">{props.data.destination},{props.data.destination_name}</div>
					<div className="arrival_date">{props.data.arrival_date}</div>
				</div>
			</div>
		</div>
		);
}