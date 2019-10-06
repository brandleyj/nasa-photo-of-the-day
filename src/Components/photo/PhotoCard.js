import React from "react";
import styled from "styled-components";

const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h1`
	color: yellow;
	font-size: 3.5rem;
	margin-top: 5vh;
`;

const Date = styled.p`
	color: yellow;
	font-size: 1.5rem;
	margin-bottom: 5vh;
`;

const SpaceImg = styled.img`
	max-width: 60%;
	border-radius: 25px;
	border: 8px solid black;
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
