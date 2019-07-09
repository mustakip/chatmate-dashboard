import React from 'react';
import {shallow} from "enzyme";
import Dashboard from "../../../app/components/Dashboard";


describe("Dashboard",() => {
  it('should render Dashboard component', function () {
    const component = shallow(<Dashboard />);

    expect(component.props().children).toEqual("Hello");
    expect(component.length).toEqual(1);
  });
});
