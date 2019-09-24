import {hashHistory, Route, Router} from "react-router";
import React from "react";
import ChatList from '../components/Dashboard';
import HomePage from "../HomePage/HomePage";
import Signup from "../Signup/Signup";


const routes = (
  <>
    <Route path="/" component={HomePage}/>
    <Route path="/chats" component={ChatList}/>
    <Route path="/signup" component={Signup}/>
  </>
);

const RouteProvider = {
  "Router": Router,
  "routes": routes,
  "history": hashHistory
};

export default RouteProvider;
