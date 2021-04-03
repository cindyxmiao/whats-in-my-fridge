import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";

const Results = (props) => {
  const history = useHistory();
  const backToSearch = useCallback(() => history.push("/"), [history]);

  console.log(props.recipes);
  const recipes = props.recipes.results;

  const hasProducts = recipes ? recipes.length > 0 : false;

  return (
    <div>
      <div> Results Page</div>
      <button onClick={backToSearch}>back to search</button>
      <ul>
        {hasProducts &&
          recipes.map((item) => {
            return <li key={item.href}> {item.title}</li>;
          })}
      </ul>
    </div>
  );
};

export default Results;
