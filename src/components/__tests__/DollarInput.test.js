import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import React from 'react';
import { DollarInput } from '../DollarInput';

configure({ adapter: new Adapter() });

describe('Mortgage calculator Component', () => {
    const handleFunction = jest.fn();

    const props = {
        id: 'housePrice',
        labelName: 'Home Price',
        targetValue: 500,
        handleChange: handleFunction,
        disabledVal: false
    };

    const tree = renderer.create(<DollarInput {...props} />).toJSON();

    it('should render properly', () => {
        expect(tree).toMatchSnapshot();
    });
});