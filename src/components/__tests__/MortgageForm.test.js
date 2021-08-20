import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import React from 'react';
import { MortgageForm } from '../MortgageForm';

configure({ adapter: new Adapter() });

describe('Mortgage Form', () => {
    const handleFunction = jest.fn();
    const props = {
        downPayment: 100,
        housePrice: 500,
        interestRate: 0.5,
        loanTerm: 25,
        amountToBorrow: 400,
        handleChange: handleFunction,
        monthlyPayment: 1700,
        errors: {
            downPayment: '',
            housePrice: '',
            amountToBorrow: ''
        },
        totalRepaid: 100,
        totalInterestPaid: 10
    };
    const tree = renderer.create(<MortgageForm {...props} />).toJSON();

    it('should render properly', () => {
        expect(tree).toMatchSnapshot();
    });
});