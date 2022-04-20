import React from "react";
import photo from "./images/profile_photo.jpg";

const Info = () => {
	return (
		<>
			<img src={photo} alt="Headshot" width="300px" />
			<h1>George Walter</h1>
			<h4>Junior Software Engineer</h4>
			<p>https://github.com/GWALTER4</p>
			<button>Email</button>
			<button>LinkedIn</button>
		</>
	);
};

export default Info;
