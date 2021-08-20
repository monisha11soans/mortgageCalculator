import React, { useState, useEffect } from 'react';
import { MortgageForm } from './MortgageForm';
import { MortgageTable } from './MortgageTable';
import { getYearlyData } from './utils';

export const Calculator = () => {
    const [values, setValues] = useState({
        housePrice: 500000,
        downPayment: 100000,
        interestRate: 1.8,
        loanTerm: 25,
        errors: {
            downPayment: '',
            housePrice: '',
            amountToBorrow: ''
        }
    });
    const [amountToBorrow, setAmountToBorrow] = useState(0);
    const [monthlyPayment, setMonthlyPayment] = useState(0);

    useEffect(() => {
        let val = (values.housePrice > 0 && values.downPayment) ? values.housePrice - values.downPayment : 0;
        let monthlyPayment = (val && values.interestRate && values.loanTerm) ?
            (((values.interestRate / 100 / 12) * val) / (1 - (Math.pow((1 + (values.interestRate / 100 / 12)), ((0 - values.loanTerm) * 12))))).toFixed(2) : 0;
        
        setAmountToBorrow(val);
        setMonthlyPayment(monthlyPayment);
    }, [values.housePrice, values.downPayment, values.interestRate, values.loanTerm]);

    const handleChange = (prop) => (event) => {
        const re = /^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/;
        const { id, value } = event.target;
        let errors = values.errors;
        switch (id) {
            case 'housePrice':
                setValues({ errors, [id]: '' });
                if (value === '' || !re.test(value)) {
                    errors.housePrice = 'Please enter a number';
                } else if (value < values.downPayment) {
                    errors.housePrice = 'Value of house lesser than downpayment';
                } else errors.housePrice = '';
                break;
            case 'amountToBorrow':
                setValues({ errors, [id]: '' });
                errors.amountToBorrow = (event.target.value === '' || !re.test(event.target.value)) ?
                    'Please enter a number' : '';
                break;
            case 'downPayment':
                setValues({ errors, [id]: '' });
                if ((values.housePrice - values.downPayment) < value) {
                    errors.downPayment = 'The downpayment must be less than the mortgage amount';
                } else if (event.target.value === '' || !re.test(event.target.value)) {
                    errors.downPayment = 'Please enter a number'
                } else errors.downPayment = '';

                break;
            default: break;
        }
        setValues({ errors, [id]: value });
        setValues({ ...values, [prop]: event.target.value });
    };

    const totalRepaid = monthlyPayment * 12 * values.loanTerm;
    const totalInterestPaid = totalRepaid - amountToBorrow;
    const yearlyPayments = getYearlyData(amountToBorrow, values.loanTerm,values.interestRate,
         monthlyPayment);

    return (
        <>
            <MortgageForm downPayment={values.downPayment}
                housePrice={values.housePrice}
                interestRate={values.interestRate}
                loanTerm={values.loanTerm}
                amountToBorrow={amountToBorrow}
                handleChange={handleChange}
                monthlyPayment={monthlyPayment}
                errors={values.errors}
                totalRepaid={totalRepaid} totalInterestPaid={totalInterestPaid.toFixed(2)}
            />
            <MortgageTable yearlyPayments={yearlyPayments} />
        </>
    )
}