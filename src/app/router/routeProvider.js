import {hashHistory, Route, Router} from "react-router";
import React from "react";
import Dashboard from "../components/Login";
import ChatList from '../components/Dashboard';


const routes = (
  <>
    <Route path="/" component={Dashboard}/>
    <Route path="/chats" component={ChatList}/>
  </>
);

const RouteProvider = {
  "Router": Router,
  "routes": routes,
  "history": hashHistory
};

export default RouteProvider;
