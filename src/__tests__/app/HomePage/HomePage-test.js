import React from 'react';
import {mount} from "enzyme";
import HomePage from "../../../app/HomePage/HomePage";
import PropTypes from "prop-types";

describe("HomePage", () => {
  let component;
  let router;

  beforeEach(() => {
    const mockRouteFunc = jest.fn();
    router = {push: mockRouteFunc};
    let testContext = {context: {router: router}, childContextTypes: {router: PropTypes.object}};
    component = mount(<HomePage/>, testContext);
  });

  it('should render Login and signup buttons', function () {
    expect(component.find('.login-button').props().children).toEqual('Login');
    expect(component.find('.signup-button').props().children).toEqual('Signup');
  });

  it('should send to login page on click of login button', function () {
    const loginButton = component.find(".login-button");
    loginButton.simulate('click');

    expect(router.push).toBeCalledWith({pathname: '/login'});
  });

  it('should send to signup page on click of signup button', function () {
    const loginButton = component.find(".signup-button");
    loginButton.simulate('click');

    expect(router.push).toBeCalledWith({pathname: '/signup'});
  });
});
