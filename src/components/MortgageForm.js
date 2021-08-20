import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { DollarInput } from './DollarInput';
import './styles.css'

export const MortgageForm = (props) => {
    return (
        <div className="App">
            <div className="mortgageCard">
                <div className="mortageWidth">
                    <DollarInput id={'housePrice'} labelName={'Home Price'}
                        targetValue={props.housePrice}
                        handleChange={props.handleChange('housePrice')} disabledVal={false} />
                    {props.errors.housePrice.length > 0 &&
                        <div className='error'>{props.errors.housePrice}</div>}
                    <div>
                        <DollarInput id={'downPayment'} labelName={'Down Payment'}
                            targetValue={props.downPayment}
                            handleChange={props.handleChange('downPayment')} disabledVal={false} />
                        {props.errors.downPayment.length > 0 &&
                            <div className='error'>{props.errors.downPayment}</div>}
                    </div>
                    <div>
                        <DollarInput id={'amountToBorrow'} labelName={'Mortgage Amount'}
                            targetValue={props.amountToBorrow}
                            handleChange={props.handleChange('amountToBorrow')}
                            disabledVal={true} />
                        {props.errors.amountToBorrow.length > 0 &&
                            <div className='error'>{props.errors.amountToBorrow}</div>}
                    </div>
                    <div>
                        <FormControl style={{ "margin": "8px", "width": "195px" }} size="small" variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Interest Rate</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                value={props.interestRate}
                                onChange={props.handleChange('interestRate')}
                                endAdornment={<InputAdornment position="end">%</InputAdornment>}
                                labelWidth={100} size="small"
                            />
                        </FormControl>
                        <FormControl variant="outlined" size="small" style={{ "margin": "8px", "width": "140px" }}>
                            <InputLabel id="demo-simple-select-outlined-label">Loan Term</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={props.loanTerm}
                                onChange={props.handleChange('loanTerm')}
                                label="loanTerm" labelWidth={150}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>10 years</MenuItem>
                                <MenuItem value={15}>15 years</MenuItem>
                                <MenuItem value={20}>20 years</MenuItem>
                                <MenuItem value={25}>25 years</MenuItem>
                                <MenuItem value={30}>30 years</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <Paper elevation={3} style={{ "width": "30%" }}>
                    <div style={{ "textAlign": "left", "padding": "0.75rem 1 rem" }}>
                        <div style={{ "padding": "16px" }}>
                            <p className="monthlyPayment">
                                ${props.monthlyPayment}
                            </p>
                            <small className="fontSummary">
                                Your estimated monthly payments are:
                            </small>
                        </div>

                        <div style={{ "padding": "24px" }}>
                            <table className="monthlyHeader">
                                <tr className="summaryHeight">
                                    <td>Down Payment: </td>
                                    <td className="paddingSummary">${props.downPayment}</td>
                                </tr>
                                <tr className="summaryHeight">
                                    <td>Mortgage Amount: </td>
                                    <td className="paddingSummary">${props.amountToBorrow}</td>
                                </tr>
                                <tr className="summaryHeight">
                                    <td>Total Interest Paid: </td>
                                    <td className="paddingSummary">${props.totalInterestPaid}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </Paper>
            </div>
        </div>
    )
}