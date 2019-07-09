import React from 'react';
import {hashHistory} from 'react-router';

export const RouterContext = React.createContext();

const RouterProvider = ({children}) => (
  <RouterContext.Provider value={{history: hashHistory}}>
    {children}
  </RouterContext.Provider>
);

RouterProvider.defaultProps = {
  children: null,
};

export default RouterProvider;
