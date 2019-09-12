import React from "react";
import styled from "styled-components";

const Card = styled.div`
	background: black;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Info = styled.p`
	color: yellow;
	max-width: 60%;
`;

const InfoCard = props => {
	return (
		<Card>
			<Info>Image Credits: {props.getCopyright}</Info>
			<Info>{props.getExplanation}</Info>
		</Card>
	);
};
export default InfoCard;
