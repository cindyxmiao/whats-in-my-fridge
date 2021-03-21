import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./Search/Search";
import Results from "./Results/Results";

const App = () => {
  const [searchValues, setSearchValues] = useState([]);
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/results">
            <Results searchValues={searchValues} />
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
