import React from 'react';
import { shallow } from 'enzyme';
import BaseButton from '../UI/Button/BaseButton/BaseButton';

// If snapshot is needed
import renderer from 'react-test-renderer';

test('Text example', () => {

    // Shallow is needed to enssure that the component is not modified by any modification
    // made at its' child components 
    const wrapper = shallow(<BaseButton/>);
    const element = wrapper.getElement();
    
    // To print elements, use:
    // console.log(element)
    
    // Test's Assetion
    expect(element.props.className).toBe('base-button');
});