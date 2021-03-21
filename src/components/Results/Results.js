import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";

const Results = (props) => {
  const history = useHistory();
  const backToSearch = useCallback(() => history.push("/"), [history]);

  return (
    <div>
      <div> Results Page</div>
      <button onClick={backToSearch}>back to search</button>
      <div>{props.searchTerm}</div>
    </div>
  );
};

export default Results;
