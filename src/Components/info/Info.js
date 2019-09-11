import React, { useState, useEffect } from "react";
import axios from "axios";
import InfoCard from "./InfoCard";

function DailyInfo() {
	const [copyright, setCopyright] = useState("");
	const [explanation, setExplanation] = useState("");

	useEffect(() => {
		axios
			.get(
				`https://api.nasa.gov/planetary/apod?api_key=E37T91MLqCIjI1m4IAFOo1YgIQdLKHuXosGsKcr4`
			)
			.then(response => {
				console.log(response);
				setCopyright(response.data.copyright);
				setExplanation(response.data.explanation);
			})
			.catch(error => {
				console.log("Try again", error);
			});
	}, []);
	return (
		<div className="infoComponent">
			<InfoCard getCopyright={copyright} getExplanation={explanation} />
		</div>
	);
}
export default DailyInfo;
