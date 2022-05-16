import React from "react";
import photo from "./images/profile_photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Info = () => {
	return (
		<div className="info">
			<img id="info__image" src={photo} alt="Headshot" width="300px" />
			<h1>George Walter</h1>
			<h4>Junior Software Engineer</h4>
			<a
				href="https://github.com/GWALTER4"
				target="_blank"
				rel="noreferrer"
			>
				https://github.com/GWALTER4
			</a>
			<div className="info__buttons">
				<a
					href="mailto:george.wb.walter@outlook.com"
					id="info__button-left"
					className="info__button"
				>
					<FontAwesomeIcon icon={faEnvelope} />
					<p>Email</p>
				</a>
				<a
					href="https://www.linkedin.com/in/george-walter/"
					id="info__button-right"
					className="info__button"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={faLinkedin} />
					<p>LinkedIn</p>
				</a>
			</div>
		</div>
	);
};

export default Info;
