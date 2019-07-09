import React from 'react';
import {shallow} from "enzyme";
import Header from "../../../app/components/Header";


describe('Header', function () {
  it('should render Header component', function () {
    const headerComponent = shallow(<Header />);

    expect(headerComponent.find('.title').props().children).toEqual('CHATMATE')
  });
});