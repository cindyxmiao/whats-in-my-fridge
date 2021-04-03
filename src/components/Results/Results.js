import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Results.css";

const Results = (props) => {
  const [loading, setLoading] = useState(true);

  const [youtubeResults, setYoutubeResults] = useState(false);

  const history = useHistory();
  const backToSearch = useCallback(() => history.push("/"), [history]);

  const isYoutube = true;

  const youtubeBaseURL = "https://www.youtube.com/results?search_query=";

  // const recipes = props.recipes.results;

  // const hasProducts = recipes ? recipes.length > 0 : false;

  useEffect(() => {
    console.log("component rendered");
    setLoading(true);
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [props.recipes]);

  const handleToggle = (evt) => {
    console.log(evt.target.checked);
    setYoutubeResults(evt.target.checked);
  };

  return (
    <div>
      {!loading && (
        <div className="page-wrapper">
          <div className="header-wrapper flex-row">
            <div className="flex-row">
              <h3>Results Page</h3>
              <button className="back-to-search" onClick={backToSearch}>
                <p style={{ color: "white" }}>New Search</p>
              </button>
            </div>
            <div className="toggle-container">
              <div className="flex-row">
                <div style={{ marginRight: "1rem", color: "white" }}>
                  Youtube results
                </div>
                <label class="switch">
                  <input
                    type="checkbox"
                    className="input"
                    onClick={handleToggle}
                  ></input>
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
          </div>
          <ul className="container">
            {props.recipes.results.map((item) => {
              return (
                <li key={item.href} className="card">
                  <a
                    href={
                      youtubeResults
                        ? youtubeBaseURL + item.title.replace(/ /g, "+")
                        : item.href
                    }
                    target="blank"
                  >
                    <div className="card-container">
                      <p className="recipe-title">{item.title}</p>
                      <img src={item.thumbnail} className="receipe-img" />
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Results;
