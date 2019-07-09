import React from 'react';
import Enzyme, {mount,shallow} from "enzyme";
import Dashboard from "../../../app/components/Dashboard";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter});


describe("Dashboard",() => {
  it('should render Dashboard component', function () {
    const component = shallow(<Dashboard />);

    expect(component.props().children).toEqual("Hello")
    expect(component.length).toEqual(1);
  });
})
