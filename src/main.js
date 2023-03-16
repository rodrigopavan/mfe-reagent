import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

var core = require('../compiled/mfe_agent.core');

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: function (props) {
     core.init_spa(props);
     return null;
  },
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
