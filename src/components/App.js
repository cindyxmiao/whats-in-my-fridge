import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./Search/Search";
import Results from "./Results/Results";

const App = () => {
  const [searchValues, setSearchValues] = useState([]);
  const corsProxy = "https://evening-fortress-67643.herokuapp.com/";
  const recipePuppyAPI = "http://www.recipepuppy.com/api/?";

  const [recipesState, setRecipesState] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("searchValueChanged!");
    console.log(searchValues);
    if (!searchValues?.length) {
      return;
    }
    const ingridents = searchValues.toString();
    setLoading(true);

    fetch(corsProxy + recipePuppyAPI + "i=" + ingridents + "&p=1", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((recipesArray) => {
        console.log(recipesArray);
        setRecipesState(recipesArray);
        setLoading(false);
      });
  }, [searchValues]);

  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/results">
            {loading ? (
              "loading"
            ) : (
              <Results searchValues={searchValues} recipes={recipesState} />
            )}
          </Route>
          <Route path="/">
            <Search setSearchValues={setSearchValues} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
