import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'; 
import App from "../../App";
 
describe('ProductHeader Component', () => {
 
    it('has an div tag', () => {
        const component = ReactTestUtils.renderIntoDocument(<App/>);
        var div = ReactTestUtils.scryRenderedDOMComponentsWithClass(component,"App");
        // var div = ReactTestUtils.findRenderedDOMComponentWithTag(component, "div");
    });
  })