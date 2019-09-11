import React from "react";

const InfoCard = props => {
	return (
		<div className="infoCard">
			<p>Image Credits: {props.getCopyright}</p>
			<p>{props.getExplanation}</p>
		</div>
	);
};
export default InfoCard;
