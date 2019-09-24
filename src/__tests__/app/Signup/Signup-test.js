import React from 'react';
import {mount} from "enzyme";
import Signup from "../../../app/Signup/Signup";


describe('Signup', function () {
  it('should render Signup page', function () {
    const signupPageComponent = mount(<Signup />);

    expect(signupPageComponent.find(".signup-page").length).toBe(1);
  });
});