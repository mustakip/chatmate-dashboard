import React from 'react';
import {mount, shallow} from "enzyme";
import Dashboard from "../../../app/components/Dashboard";


describe("Dashboard", () => {
  it('should render Dashboard component', function () {
    const component = shallow(<Dashboard/>);

    expect(component.find('.login-button').props().children).toEqual('Login');
    expect(component.find('.username-input-box').props().id).toEqual('username-input');
    expect(component.length).toEqual(1);
  });

  it('should redirect to LoginForm on click of Login button if username is present in input box', function () {
    const mockRouteFunc = jest.fn();
    const router = {push: mockRouteFunc};
    let testContext = {context: {router: router}};
    const username = 'Username';
    const query = {
      username: username
    }

    const DashboardComponent = mount(<Dashboard location={{query: query}}/>,testContext);
    const inputBox = DashboardComponent.find('.username-input-box');
    const loginButton = DashboardComponent.find('.login-button');
    loginButton.simulate('click');

    expect(router.push).toBeCalledWith({
      pathname: '/login',
      query: query
    })
  });
});
