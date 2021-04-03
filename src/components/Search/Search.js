import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Search.css";

const Search = (props) => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState("");

  const [searchList, setSearchList] = useState([]);

  const colors = [
    "rgb(214, 201, 145)",
    "rgb(210, 113, 70)",
    "rgb(66, 129, 164)",
    "rgb(145 214 200)",
  ];

  const handleOnClick = useCallback(() => {
    history.push("/results");
    if (searchValue) {
      setSearchList(searchList.concat(searchValue));
      setSearchValue("");
      props.setSearchValues(searchList.concat(searchValue));
    } else {
      props.setSearchValues(searchList);
    }
  }, [history, props, searchValue, searchList]);

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
    <div id="main-container">
      <div>
        <h1>What's in my Fridge?</h1>
      </div>
      <div className="search-container">
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="e.g., bacon, eggs"
        />
        <button type="button" onClick={handleOnClick} className="search-btn">
          <p style={{ color: "white" }}>Search!</p>
        </button>
      </div>

      <ul>
        <div className="search-card-container">
          {searchList.map((item) => {
            return (
              <li
                key={item}
                className="search-card"
                style={{
                  backgroundColor:
                    colors[searchList.indexOf(item) % colors.length],
                }}
              >
                <div>
                  <p>{item}</p>
                </div>
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default Search;
