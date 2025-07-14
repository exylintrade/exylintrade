import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./style.css";
import Home from "./views/home";
import NotFound from "./views/not-found";
import LearnMore from "./components/learnmore";
import ContactUs from "./components/contactus";
import About from "./components/about";
import Services from "./components/services";
import FAQs from "./components/faqs";
import PrivacyPolicy from "./components/privacy";
import TermsAndConditions from "./components/terms";
import CookiesPolicy from "./components/cookies";
import Copyright from "./components/copyright";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/learnmore" component={LearnMore} />
        <Route path="/services" component={Services} />
        <Route path="/faqs" component={FAQs} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/terms" component={TermsAndConditions} />
        <Route path="/cookies" component={CookiesPolicy} />
        <Route path="/copyright" component={Copyright} />
        <Route component={NotFound} />

        {/* <Redirect to="**" /> */}
        {/* <ScrollShip /> */}
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
