import React from 'react';

export const MortgageTable = props => {
    let monthlyArr = [];
    for(let i=0; i< props.yearlyPayments.length; i++) {
        monthlyArr.push(
			<tr key={props.yearlyPayments[i].year}>
				<td>{props.yearlyPayments[i].year}</td>
				<td>${props.yearlyPayments[i].interestPaid}</td>
				<td>${props.yearlyPayments[i].interestPaidToDate}</td>
				<td>${props.yearlyPayments[i].principalRepaid}</td>
				<td>${props.yearlyPayments[i].principalRepaidToDate}</td>
				<td>${props.yearlyPayments[i].outstandingBalance}</td>
			</tr>
		);
    }

    return(
		<table id="mortgageTable">
			<thead>
				<tr>
					<th>Year</th>
					<th>Interest Paid</th>
					<th>Total Interest Paid</th>
					<th>Year Principal Repaid</th>
					<th>Total Principal Repaid</th>
					<th>Balance</th>
				</tr>
			</thead>
			<tbody>
				{monthlyArr}	
			</tbody>
		</table>
	);
}