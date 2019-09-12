import React from "react";
import "./App.css";
import DailyPic from "./Components/photo/Photo";
import DailyInfo from "./Components/info/Info";
import styled from "styled-components";

function App() {
	return (
		<div className="App">
			<DailyPic />
			<DailyInfo />
		</div>
	);
}

export default App;
