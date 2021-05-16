import "./App.css";
import React, { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Genome from "./pages/Genome";
import Jobs from "./pages/Jobs";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/bios" component={Genome}></Route>
        <Route pathe="jobs" component={Jobs}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
