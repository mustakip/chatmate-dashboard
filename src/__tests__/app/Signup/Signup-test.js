import React from 'react';
import {mount} from "enzyme";
import Signup from "../../../app/Signup/Signup";


describe('Signup', function () {
  it('should render Signup page', function () {
    const signupPageComponent = mount(<Signup />);
    const nameHolder = signupPageComponent.find(".name-input");
    const usernameHolder = signupPageComponent.find(".username-input");
    const passwordHolder = signupPageComponent.find(".password-input");

    expect(signupPageComponent.find(".signup-page").length).toBe(1);
    expect(nameHolder.props().placeholder).toBe("Name");
    expect(nameHolder.props().name).toBe("name");
    expect(usernameHolder.props().placeholder).toBe("Username");
    expect(usernameHolder.props().name).toBe("username");
    expect(passwordHolder.props().placeholder).toBe("Password");
    expect(passwordHolder.props().name).toBe("password");
  });
});