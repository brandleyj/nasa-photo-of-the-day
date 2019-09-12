import React from "react";
import styled from "styled-components";

const Card = styled.div`
	background: black;
`;

const Title = styled.h1`
	color: yellow;
`;

const Date = styled.p`
	color: yellow;
`;

const SpaceImg = styled.img`
	max-width: 60%;
`;

const PhotoCard = props => {
	return (
		<Card>
			<Title>{props.getTitle}</Title>
			<Date>{props.getDate}</Date>
			<SpaceImg alt="Daily Space Picture" src={props.getPic} />
		</Card>
	);
};
export default PhotoCard;
