import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./pages/Main"
import Handoff from "./pages/Handoff"
import ViewHandoff from "./pages/ViewHandoff"
// import Users from "./pages/Users"
import Amber from "./pages/Amber"
import Combustible from "./pages/Combustible"
import { createBrowserHistory } from "history";
import "./App.css"

function createEmail(subject) {
  let div = document.querySelector("#email")
  div.setAttribute("contenteditable", true)
  div.setAttribute("style", "color:black;background-color:white")
  div.focus();
  document.execCommand("SelectAll")
  document.execCommand("copy");
  document.getSelection().removeAllRanges();
  div.setAttribute("contenteditable", false)
  div.setAttribute("style", "color: rgb(187, 187, 187);background-color:black;display:none")
  window.open(`mailto://${subject ? "?subject="+subject : ""}`, "_blank");
}

function App() {


  let path = createBrowserHistory()
  return (
    <Router>
      <div>
        <NavBar path={path.location.pathname} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/handoff" render={props => (<Handoff createEmail={createEmail}/>)} />
          {/* <Route exact path="/users" component={Users} /> */}
          <Route exact path="/viewhandoff" component={ViewHandoff} />
          <Route exact path="/amber" render={props => (<Amber createEmail={createEmail}/>)} />
          <Route exact path="/combustible" render={props => (<Combustible createEmail={createEmail}/>)} />
        </Switch>
        </div>
    </Router>
  );
}

export default App;
