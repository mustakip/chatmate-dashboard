import {hashHistory, Route, Router} from "react-router";
import React from "react";
import Dashboard from "../../components/Dashboard";


const routes =
  <Route path="/" component={Dashboard}>
  </Route>;

const RouteProvider = {
  "Router": Router,
  "routes": routes,
  "history": hashHistory
};

export default RouteProvider;
