import React, { useState } from "react";

export const Card = (props)=> {
    const [isClicked, setIsClicked] = useState(false);

    const toggleHeart = () => {
      setIsClicked(!isClicked);
    };
  
    const heartClasses = `heart-icon ${isClicked ? "clicked" : ""}`;
    return(
        <div className="card border "style={{ width: "18rem" }}>
        <img
          src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fvia.placeholder.com%2F500x325"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Learn more
          </a>
          <div className="favBox ">
            <div className={heartClasses} onClick={toggleHeart}>
              <i className="far fa-heart" />
            </div>
          </div>
        </div>
      </div>
    )
}