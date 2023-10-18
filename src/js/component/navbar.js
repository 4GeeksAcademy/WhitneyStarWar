
import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";



export const Navbar = () => {


  const { store, actions } = useContext(Context)


  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="container navbar ">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img
              src="https://gray-kwch-prod.cdn.arcpublishing.com/resizer/FbV6jRtAPIjhkSqttsuUXwZql7s=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/4ALOBDTT3RJ3BOCBIWYK5JGYYM.jpg"
              alt=""
              className="w-25 img-fluid navbar-brand-img"
            />
          </span>
        </Link>
     

      <div className="favButton ml-auto ">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul className="dropdown-menu">
            {store.favorites.map((favorite, index) => (
              <li key={index}>
                <div className="d-flex justify-content-between">
                  {favorite.name}
                  <div onClick={() => actions.removeFavorites(index)}>
                    <i className="fa-solid fa-trash" />
                  </div>
                </div>
              </li>
            ))}

          </ul>
        </div>
      </div>
      </div>
    </nav>

    
  );
};