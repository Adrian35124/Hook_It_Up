import React, { Fragment } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import PreviewList from "./list";
import FilmDetails from "./filmdetails";
const App = () => {
  return (
      <Fragment>
        <Router>
        <nav>
          <ul>
            <li>
              <Link to="/"> Go Home </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={PreviewList} />
          <Route path="/films/:id" component={FilmDetails} />
        </Switch>
    </Router>
      </Fragment>
  );
};

export default App;
