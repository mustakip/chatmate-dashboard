import React from 'react';
import {mount} from "enzyme";
import PropTypes from "prop-types";
import Login from "../../../app/Login/Login";
import {createStore} from "redux";

describe("Login", () => {
  it('should render Login component', function () {
    const component = mount(<Login />);
    const loginForm = component.find('.login-form');

    expect(component.length).toEqual(1);
    expect(loginForm.find('.username-input').props().name).toEqual('username');
    expect(loginForm.find('.password-input').props().name).toEqual('password');
  });
});

