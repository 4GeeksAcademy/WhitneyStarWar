import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <Link to="/">
          <div class="navbar-brand">
            <img
              style={{ width: "10rem" }}
              src="https://gray-kwch-prod.cdn.arcpublishing.com/resizer/FbV6jRtAPIjhkSqttsuUXwZql7s=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/4ALOBDTT3RJ3BOCBIWYK5JGYYM.jpg"
              alt=""
            />
          </div>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle btn btn-secondary text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites
              </a>
              <ul class="dropdown-menu">
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
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
