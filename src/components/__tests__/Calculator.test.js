import { configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import React from 'react';
import { Calculator } from '../Calculator';

configure({ adapter: new Adapter() });

describe('Mortgage Component', () => {
    const tree = renderer.create(<Calculator />).toJSON();

    it('should render properly', () => {
      expect(tree).toMatchSnapshot();
    });
});