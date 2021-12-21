import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { init as initApm } from "@elastic/apm-rum";
import { ApmRoute } from "@elastic/apm-rum-react";

import About from "./components/About";
import Home from "./components/Home";
import Topics from "./components/Topics";
const apm = initApm({
  serviceName: "web",
  serverUrl:
    "https://58892ef9c1f846bb842830300d92dd35.apm.europe-west1.gcp.cloud.es.io",
  logLevel: "debug",
  serviceVersion: "1.0"
});

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <ApmRoute exact path="/" component={Home} />
      <ApmRoute path="/about" component={About} />
      <ApmRoute path="/topics" component={Topics} />
    </div>
  </Router>
);

render(<BasicExample />, document.getElementById("root"));
