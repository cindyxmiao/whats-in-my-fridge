import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Results.css";

const Results = (props) => {
  const [loading, setLoading] = useState(true);

  const history = useHistory();
  const backToSearch = useCallback(() => history.push("/"), [history]);

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
        <div>
          <div> Results Page</div>
          <button onClick={backToSearch}>back to search</button>
          <ul>
            {props.recipes.results.map((item) => {
              return <li key={item.href}> {item.title}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Results;
