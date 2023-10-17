
import { Link } from "react-router-dom";
import React, { useState } from "react";


export const Navbar = () => {
  const [favorites, setFavorites] = useState([]);
  const [newFavorite, setNewFavorite] = useState("");

  const addFavorite = () => {
    setFavorites([...favorites, newFavorite]);
    setNewFavorite("");
  };

  const removeFavorite = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites.splice(index, 1);
    setFavorites(updatedFavorites);
  };

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img
              src="https://gray-kwch-prod.cdn.arcpublishing.com/resizer/FbV6jRtAPIjhkSqttsuUXwZql7s=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/4ALOBDTT3RJ3BOCBIWYK5JGYYM.jpg"
              alt="Logo"
              className="w-25 img-fluid navbar-brand-img"
            />
          </span>
        </Link>
      </div>

      <nav className="navbar navbar-light bg-light mb-3">
        <div className="container">
          <Link to="/">
            <span className="navbar-brand mb-0 h1">
              <img
                src="your-logo-src.jpg"
                alt="Logo"
                className="w-25 img-fluid navbar-brand-img"
              />
            </span>
          </Link>
        </div>
        <div className="favButton ml-auto">
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
              {favorites.map((favorite, index) => (
                <li key={index}>
                  <div className="d-flex justify-content-between">
                    {favorite}
                    <button
                      onClick={() => removeFavorite(index)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
              <li>
                <div className="d-flex">
                  <input
                    type="text"
                    value={newFavorite}
                    onChange={(e) => setNewFavorite(e.target.value)}
                    placeholder="Add a new favorite"
                  />
                  <button onClick={addFavorite} className="btn btn-success">
                    Add
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
};
