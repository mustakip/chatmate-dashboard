import React from 'react';
import './App.css';
import {Router} from "react-router";
import RouterProvider from "./components/RouterProvider";
import RouteProvider from "./app/router/routeProvider";

class App extends React.Component {
  render() {
    return (
       <RouterProvider>
        <Router routes={RouteProvider.routes} history={RouteProvider.history} />
       </RouterProvider>
    );
  }
}

export default App;
