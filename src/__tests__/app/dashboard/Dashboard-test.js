import React from 'react';
import {mount, shallow} from "enzyme";
import Dashboard from '../../../app/Dashboard/Dashboard';
import {createStore} from "redux";

describe('Dashboard', function () {
  let store;

  beforeEach(() => {
    store = {
      ...createStore((x) => x, {username: "username"}),
      dispatch: jest.fn()
    };
  });

  it('should render Dashboard', function () {
    const component = mount(<Dashboard store={store} username="username"/>);
    expect(component.props().username).toEqual('username');
  });
});