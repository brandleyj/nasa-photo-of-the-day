import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

function DailyPic() {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [pic, setPic] = useState("");

	useEffect(() => {
		axios
			.get(
				`https://api.nasa.gov/planetary/apod?api_key=E37T91MLqCIjI1m4IAFOo1YgIQdLKHuXosGsKcr4`
			)
			.then(response => {
				console.log(response);
				setTitle(response.data.title);
				setDate(response.data.date);
				setPic(response.data.hdurl);
			})
			.catch(error => {
				console.log("Try again", error);
			});
	}, []);
	return (
		<div className="imgComponent">
			<PhotoCard getTitle={title} getDate={date} getPic={pic} />
		</div>
	);
}
export default DailyPic;
