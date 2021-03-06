import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header";
import LandingPage from "./content/LandingPage";
import IBM from "./content/ibm";
import SdPlus from "./content/sdplus";
import Chiral from "./content/chiral";
import CssChallenges from "./content/css-challenges";
import Behance from "./content/behance";
import SelfServicePortal from "./content/selfServicePortal/selfServicePortal";
import HomepageDashboard from "./content/HomepageDashboard/HomepageDashboard";
import About from "./content/about";
import Footer from "./components/footer";

function App() {
  const [hidden, visible] = useState(false);
  const clickHandler = () => {
    if (hidden === false) {
      visible(true);
    } else if (hidden === true) {
      visible(false);
    }
    console.log(hidden);
  };

  const scrolling = hidden ? "overflow-hidden" : " ";
  return (
    <div
      className={
        scrolling + " w-10/12 max-w-7xl h-screen mx-auto bg-background-color"
      }
    >
      <Header hidden={hidden} clickHandler={clickHandler} />
      <Switch>
        <Route exact path="/">
          <LandingPage hidden={hidden} />
        </Route>
        <Route path="/ibm">
          <IBM hidden={hidden} />
        </Route>
        <Route path="/self-service-portal">
          <SelfServicePortal hidden={hidden} />
        </Route>
        <Route path="/homepage-dashboard">
          <HomepageDashboard hidden={hidden} />
        </Route>
        <Route path="/sdplus">
          <SdPlus hidden={hidden} />
        </Route>
        <Route path="/chiral_colonies">
          <Chiral hidden={hidden} />
        </Route>
        <Route path="/css_challenge">
          <CssChallenges hidden={hidden} />
        </Route>
        <Route path="/behance">
          <Behance hidden={hidden} />
        </Route>
        <Route path="/AboutMe">
          <About hidden={hidden} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
