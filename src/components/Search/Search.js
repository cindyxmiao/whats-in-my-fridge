import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

const Search = (props) => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState("");

  const [searchList, setSearchList] = useState([]);

  const handleOnClick = useCallback(() => {
    history.push("/results");
    if (searchValue) {
      setSearchList(searchList.concat(searchValue));
      setSearchValue("");
      props.setSearchValues(searchList.concat(searchValue));
    } else {
      props.setSearchValues(searchList);
    }
  }, [history, props, searchValue]);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchList(searchList.concat(searchValue));
      setSearchValue("");
    }
  };

  return (
    <div>
      <div> Search Page</div>
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button type="button" onClick={handleOnClick}>
        Search!
      </button>

      <ul>
        {searchList.map((item) => {
          return <li key={item}> {item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Search;
