import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";

const Results = (props) => {
  const history = useHistory();
  const backToSearch = useCallback(() => history.push("/"), [history]);

  return (
    <div>
      <div> Results Page</div>
      <button onClick={backToSearch}>back to search</button>
      <ul>
        {props.searchValues.map((item) => {
          return <li key={item}> {item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Results;
