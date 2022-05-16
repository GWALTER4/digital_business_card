import React from "react";
import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";

const App = () => {
	return (
		<div className="business-card">
			<Info />
			<About />
			<Interests />
			<Footer />
		</div>
	);
};

export default App;
