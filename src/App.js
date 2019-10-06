import React from "react";
import "./App.css";
import DailyPic from "./Components/photo/Photo";
import DailyInfo from "./Components/info/Info";
import styled from "styled-components";
import img from "./img/Stars.jpg";

const Card = styled.div`
	background: url(${img}) center center fixed;
	background-size: cover;
`;

function App() {
	return (
		<Card>
			<DailyPic />
			<DailyInfo />
		</Card>
	);
}

export default App;
