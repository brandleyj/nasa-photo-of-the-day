import React from "react";

const PhotoCard = props => {
	return (
		<div className="photoCard">
			<h1>{props.title}</h1>
			<p>{props.date}</p>
			<img alt="" src={props.hdurl} />
		</div>
	);
};
export default PhotoCard;
