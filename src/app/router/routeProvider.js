import {hashHistory, Route, Router} from "react-router";
import React from "react";
import Dashboard from "../components/Dashboard";
import LoginForm from "../components/LoginForm";


const routes = (
  <>
    <Route path="/" component={Dashboard}/>
    <Route path="/login" component={LoginForm}/>
  </>
);

const RouteProvider = {
  "Router": Router,
  "routes": routes,
  "history": hashHistory
};

export default RouteProvider;
