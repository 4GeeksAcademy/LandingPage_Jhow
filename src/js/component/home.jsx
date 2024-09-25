import React from "react";

//include images into your bundle
import Navbar from "./navbar";
import Jumbotron from "./jumbotron ";
import Card from "./card";
import Footer from "./footer";

//create your first component
const Home = () => {
	const imagenes = [
		"https://picsum.photos/200",
		"https://picsum.photos/seed/picsum/200/300",
		"https://picsum.photos/200/300/?blur",
		"https://picsum.photos/200/300?grayscale"
	]
	return (
		<div>
			<div> <Navbar /></div>
			<div className="container">
				<div><Jumbotron /></div>
				<br />
				<div className="container">
					<div className="row justify-content-between mb-5">
						{imagenes.map((imagen) => {
							return (
								<Card imagen={imagen} />
							)

						})}

					</div>

				</div>

			</div>
				<div><Footer /></div>

		</div>
	);
};

export default Home;