import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitterSquare,
	faFacebookSquare,
	faInstagramSquare,
	faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<>
			<FontAwesomeIcon icon={faTwitterSquare} />
			<FontAwesomeIcon icon={faFacebookSquare} />
			<FontAwesomeIcon icon={faInstagramSquare} />
			<FontAwesomeIcon icon={faGithubSquare} />
		</>
	);
};

export default Footer;
