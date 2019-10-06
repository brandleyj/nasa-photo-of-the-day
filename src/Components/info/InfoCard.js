import React from "react";
import styled from "styled-components";

const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 5vh;
	padding-bottom: 5vh;
`;

const Info = styled.p`
	color: yellow;
	max-width: 60%;
	font-size: 1.5rem;
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
