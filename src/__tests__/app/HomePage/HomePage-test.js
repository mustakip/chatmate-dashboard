import React from 'react';
import {mount} from "enzyme";
import HomePage from "../../../app/HomePage/HomePage";
import PropTypes from "prop-types";
import Login from "../../../app/components/Login";

describe("HomePage", () => {

  it('should render Login and signup buttons', function () {
    const component = mount(<HomePage/>);

    expect(component.find('.login-button').props().children).toEqual('Login');
    expect(component.find('.signup-button').props().children).toEqual('Signup');
  });

  it('should send to login page on click of login button', function () {
    const mockRouteFunc = jest.fn();
    const router = {push: mockRouteFunc};
    let testContext = {context: {router: router}, childContextTypes: {router: PropTypes.object}};
    const component = mount(<HomePage/>, testContext);

    const loginButton = component.find(".login-button");
    loginButton.simulate('click');

    expect(router.push).toBeCalledWith({pathname: '/login'});
  });

  it('should send to signup page on click of signup button', function () {
    const mockRouteFunc = jest.fn();
    const router = {push: mockRouteFunc};
    let testContext = {context: {router: router}, childContextTypes: {router: PropTypes.object}};
    const component = mount(<HomePage/>, testContext);

    const loginButton = component.find(".signup-button");
    loginButton.simulate('click');

    expect(router.push).toBeCalledWith({pathname: '/signup'});
  });
});
