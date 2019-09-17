import {hashHistory, Route, Router} from "react-router";
import React from "react";
import ChatList from '../components/Dashboard';
import HomePage from "../HomePage/HomePage";


const routes = (
  <>
    <Route path="/" component={HomePage}/>
    <Route path="/chats" component={ChatList}/>
  </>
);

const RouteProvider = {
  "Router": Router,
  "routes": routes,
  "history": hashHistory
};

export default RouteProvider;
