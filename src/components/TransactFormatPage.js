import React from 'react';

const TransactFormatPage = props => {

    return (
        <li>
            <h3 style={{float: 'left'}} > Kingdom Transaction: {props.transaction.name}</h3>
            <h3 style={{float: 'right'}}> Money Amount: {props.transaction.amount}</h3>
        </li>
    )
};
export default TransactFormatPage