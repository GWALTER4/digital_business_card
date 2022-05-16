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
		<div className="footer">
			<div className="social-media">
				<a
					href="https://twitter.com/?lang=en"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={faTwitterSquare} />
				</a>
				<a
					href="https://www.facebook.com/"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={faFacebookSquare} />
				</a>
				<a
					href="https://www.instagram.com/"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={faInstagramSquare} />
				</a>
				<a
					href="https://github.com/GWALTER4"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={faGithubSquare} />
				</a>
			</div>
		</div>
	);
};

export default Footer;
