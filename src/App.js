import "./App.css";
import React, { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Genome from "./pages/Genome";
import JobDetail from "./pages/JobDetail";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Jobs from "./pages/Job";
import Apply from "./pages/Apply";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/bios/" component={Genome} exact></Route>
        <Route path="/jobs" component={Jobs} exact></Route>
        <Route path="/apply" component={Apply} exact></Route>
        <Route pathe="/jobs/detail" component={JobDetail} exact></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
