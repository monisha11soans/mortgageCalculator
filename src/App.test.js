import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import React from 'react';
import App from './App';

configure({ adapter: new Adapter() });

describe('Mortgage Component', () => {
    const tree = renderer.create(<App />).toJSON();

    it('should render properly', () => {
      expect(tree).toMatchSnapshot();
    });
});