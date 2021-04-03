import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Results.css";

const Results = (props) => {
  const [loading, setLoading] = useState(true);

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

  return (
    <div>
      {!loading && (
        <div className="page-wrapper">
          <div className="header-wrapper">
            <p className="results-page">Results Page</p>
            <button onClick={backToSearch}>
              <p>New Search</p>
            </button>
          </div>
          <ul className="container">
            {props.recipes.results.map((item) => {
              return (
                <li key={item.href} className="card">
                  <a
                    href={youtubeBaseURL + item.title.replace(/ /g, "+")}
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
