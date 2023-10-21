import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let item = store[params.category][params.idx]
	return (
		<div className="container bg-dark text-white ">
			<div className="top d-flex">
				<div className="num1">
					<img className="learnMoreImage"
						src={`https://starwars-visualguide.com/assets/img/${params.category}/${Number(params.idx )+ 1}.jpg`}

						onError={(e) => {
							console.error("Image loading failed:", e);
							e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
						}} />

				</div>
				<div className="num2">
					<div className="learnMoreWords">
						<h3>{item.name}</h3>
						<p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
							molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
							numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
							optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
							obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
							nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
							tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
							quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
							sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
							recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
							minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
							quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
							fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
							consequuntur! Commodi minima excepturi repudiandae velit hic maxime
							doloremque. Quaerat provident commodi consectetur veniam similique</p>
					</div>
				</div>

			</div>
			<div className="row bottom">
				<div className="col">
					<h1>{params.category == "characters" ? "Name " : params.category == "planets" ? "Terrain: " : "Manufacturer"}</h1>

					<p style={{ textAlign: "center", verticalAlign: "middle" }}>{item.name || item.terrain || item.manufacturer}</p>
				</div>
				<div className="col">
					<h1>{params.category == "characters" ? "Birth Year " : params.category == "planets" ? "Terrain: " : "Manufacturer"}</h1>
					<p style={{ textAlign: "center", verticalAlign: "middle" }}>{item.birth_year || item.terrain || item.manufacturer}</p>
				</div>
				<div className="col">
					<h1>{params.category == "characters" ? "Gender " : params.category == "planets" ? "Terrain: " : "Manufacturer"}</h1>
					<p style={{ textAlign: "center", verticalAlign: "middle" }}>{item.gender || item.terrain || item.manufacturer}</p>
				</div>
				<div className="col">
					<h1>{params.category == "characters" ? "Height " : params.category == "planets" ? "Terrain: " : "Manufacturer"}</h1>
					<p style={{ textAlign: "center", verticalAlign: "middle" }}>{item.height || item.terrain || item.manufacturer}</p>
				</div>
				<div className="col">
					<h1>{params.category == "characters" ? "Skin Color " : params.category == "planets" ? "Terrain: " : "Manufacturer"}</h1>
					<p style={{ textAlign: "center", verticalAlign: "middle" }}>{item.skin_color || item.terrain || item.manufacturer}</p>
				</div>
				<div className="col">
					<h1>{params.category == "characters" ? "Eye Color " : params.category == "planets" ? "Terrain: " : "Manufacturer"}</h1>
					<p style={{ textAlign: "center", verticalAlign: "middle" }}>{item.eye_color || item.terrain || item.manufacturer}</p>
				</div>


			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
// src={`https://starwars-visualguide.com/assets/img/${params.category}/${params.idx + 1}.jpg`}