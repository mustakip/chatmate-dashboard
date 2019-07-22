import React from 'react';
import {shallow} from "enzyme";
import Dashboard from "../../../app/components/Dashboard";


describe("Dashboard",() => {
  it('should render Dashboard component', function () {
    const component = shallow(<Dashboard />);

    expect(component.find('.login-button').props().children).toEqual('Login');
    expect(component.length).toEqual(1);
  });
});
