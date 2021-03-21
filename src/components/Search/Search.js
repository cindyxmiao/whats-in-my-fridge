import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

const Search = (props) => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState("");

  const handleOnClick = useCallback(() => {
    history.push("/results");
    props.setSearchTerm(searchValue);
  }, [history, props, searchValue]);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <div> Search Page</div>
      <input type="text" value={searchValue} onChange={handleInputChange} />
      <button type="button" onClick={handleOnClick}>
        Search!
      </button>
    </div>
  );
};

export default Search;
