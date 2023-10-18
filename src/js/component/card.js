import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Card = (props) => {
    const [isClicked, setIsClicked] = useState(false);
    const { store, actions } = useContext(Context)


    return (
        <div className="card border " style={{ width: "18rem" }}>
            <img
                src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fvia.placeholder.com%2F500x325"
                className="card-img-top"
                alt="..."
            />
            <div className="card-body">
                <h5 className="card-title">{props.item.name}</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <div className="navbar">
                    <a href="#" className="btn btn-primary">
                        Learn more
                    </a>
                    <div className="favBox">
                        <div className={isClicked ? "far fa-heart glow" : "far fa-heart"} onClick={() => { setIsClicked(!isClicked); actions.addToFavorites(props.item); }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
