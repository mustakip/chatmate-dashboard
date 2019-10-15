import React from 'react';
import {mount} from "enzyme";
import PropTypes from "prop-types";
import Login from "../../../app/components/Login";
import {createStore} from "redux";

describe("Login", () => {
  let updateUsername;
  let store;

  beforeEach(() => {
    updateUsername = jest.fn();
    store = {
      ...createStore((x) => x, {username: "username"}),
      dispatch: jest.fn()
    };
  });

  it('should render Login component', function () {
    const component = mount(<Login store={store}/>);

    expect(component.find('.login-button').props().children).toEqual('Login');
    expect(component.find('.username-input-box').props().id).toEqual('username-input');
    expect(component.length).toEqual(1);
  });

  it('should redirect to Login on click of Login button if username is present in input box', function () {
    const mockRouteFunc = jest.fn();
    const router = {push: mockRouteFunc};
    let testContext = {context: {router: router}, childContextTypes: {router: PropTypes.object}};
    const username = 'Username';
    const query = {
      username: username
    };

    const DashboardComponent = mount(<Login location={{query: query}}
                                            updateUsername={jest.fn()}
                                            store={store}
    />, testContext);
    const loginButton = DashboardComponent.find('.login-button');
    loginButton.simulate('click');

    expect(router.push).toBeCalledWith({
      pathname: '/chats',
      query: query
    });
  });
});

