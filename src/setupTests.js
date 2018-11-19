import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import localStorage from './services/__mocks__/localStorage'
window.localStorage = localStorage

Enzyme.configure({ adapter: new Adapter() })

global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
