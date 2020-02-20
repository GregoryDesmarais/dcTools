import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./pages/Main"
// import Handoff from "./pages/Handoff"
// import HandoffCreate from "./pages/Handoff/Create"
import Amber from "./pages/Amber"
import Cardboard from "./pages/Cardboard"
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/handoff" component={Handoff} /> */}
          {/* <Route exact path="/handoff/create" component={HandoffCreate} /> */}
          <Route exact path="/amber" component={Amber} />
          <Route exact path="/cardboard" component={Cardboard} />
        </Switch>
        </div>
    </Router>
  );
}

export default App;
