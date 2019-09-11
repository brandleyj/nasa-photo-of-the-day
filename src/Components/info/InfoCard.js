import React from "react";

const InfoCard = props => {
	return (
		<div className="infoCard">
			<p>Image Credits: {props.copyright}</p>
			<p>{props.explanation}</p>
		</div>
	);
};
export default InfoCard;
