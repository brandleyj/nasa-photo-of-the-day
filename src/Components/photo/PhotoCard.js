import React from "react";

const PhotoCard = props => {
	return (
		<div className="photoCard">
			<h1>{props.getTitle}</h1>
			<p>{props.getDate}</p>
			<img alt="" src={props.getPic} />
		</div>
	);
};
export default PhotoCard;
