import React from 'react';
import {hashHistory} from 'react-router';
import {arrayOf, node, oneOfType} from 'prop-types';

export const RouterContext = React.createContext();

const RouterProvider = ({children}) => (
  <RouterContext.Provider value={{history: hashHistory}}>
    {children}
  </RouterContext.Provider>
);

RouterProvider.defaultProps = {
  children: null,
};

RouterProvider.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]),
};

export default RouterProvider;
