import React from 'react';
import './App.css';
import {Router} from "react-router";
import RouterProvider from "./app/components/RouterProvider";
import Header from "./app/components/Header";
import RouteProvider from "./app/router/routeProvider";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <RouterProvider>
          <Router routes={RouteProvider.routes} history={RouteProvider.history}/>
        </RouterProvider>
      </div>
    );
  }
}

export default App;
