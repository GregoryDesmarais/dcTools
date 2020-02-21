import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./pages/Main"
import Handoff from "./pages/Handoff"
import Users from "./pages/Users"
import Amber from "./pages/Amber"
import Cardboard from "./pages/Cardboard"
import { createBrowserHistory } from "history";
import "./App.css"

function App() {
  let path = createBrowserHistory()
  return (
    <Router>
      <div>
        <NavBar path={path.location.pathname} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/handoff" component={Handoff} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/amber" component={Amber} />
          <Route exact path="/cardboard" component={Cardboard} />
        </Switch>
        </div>
    </Router>
  );
}

export default App;
