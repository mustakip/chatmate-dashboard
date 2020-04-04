import { hashHistory, Route, Router } from "react-router";
import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import HomePage from "../HomePage/HomePage";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";

const routes = (
  <>
    <Route path="/" component={HomePage} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
  </>
);

const RouteProvider = {
  Router: Router,
  routes: routes,
  history: hashHistory
};

export default RouteProvider;
