
import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Card = (props) => {
    const [isClicked, setIsClicked] = useState(false);
    const { actions } = useContext(Context);

    const handleButtonClick = () => {
        setIsClicked(!isClicked);
        actions.addToFavorites(props.item);
    };


    return (
        <div className="card border" style={{ width: "18rem" }}>
            <img
                src={`https://starwars-visualguide.com/assets/img/${props.category}/${props.idx + 1}.jpg`}
                onError={(e) => {
                    e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                }}
                className="card-img-top"
                alt="..."
            />
            <div className="card-body">
                <h5 className="card-title">{props.item.name}</h5>
                <p className="card-text">
                    {props.category === "characters" && (
                        <>
                            <p>Gender: {props.item.gender}</p>
                            <p>Hair Color: {props.item.hair_color}</p>
                            <p>Eye Color: {props.item.eye_color}</p>
                        </>
                    )}
                    {props.category === "planets" && (
                        <>
                            <p>Terrain: {props.item.terrain}</p>
                            <p>Population: {props.item.population}</p>
                            <p>Climate: {props.item.climate}</p>
                        </>
                    )}
                    {props.category === "starships" && (
                        <>
                            <p>Manufacturer: {props.item.manufacturer}</p>
                            <p>Model: {props.item.model}</p>
                            <p>Class: {props.item.starship_class}</p>
                        </>
                    )}
                </p>

                <div className="navbar">
                    <Link to={`/${props.category}/details/${props.idx}`}>
                        <a href="#" className="btn btn-danger">
                            Learn more
                        </a>
                    </Link>
                    <div className="favBox">
                        <button
                            className={isClicked ? "fa-brands fa-jedi-order clicked" : "fa-brands fa-jedi-order glow"}
                            onClick={handleButtonClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};



