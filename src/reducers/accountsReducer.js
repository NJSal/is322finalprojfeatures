import React from 'react';
import { connect } from 'react-dom';
import { depositCash, withdrawCash } from '../actions';

const DEFAULT_STATE = [
    { _id: 1, name: "Lannisters", balance: 1189.78 },
    { _id: 2, name: "Starks", balance: 567.71 },
    { _id: 3, name: "Baratheons", balance: 31.26 },
    { _id: 4, name: "Targaryens", balance: 34.75 },
    { _id: 5, name: "Greyjoys", balance: 9.03 },
    { _id: 6, name: "Tyrells", balance: 1133.45 },
    { _id: 7, name: "Martells", balance: 737.9 },
    { _id: 8, name: "Tullys", balance: 483.56 },
    { _id: 9, name: "Arryns", balance: 1035.83 },
    { _id: 10, name: "Free Folk", balance: -134.34 }
];


const accountsReducer = (state = DEFAULT_STATE , action) =>{
    let updateState = [...state];                        //reducer must return a new array/object
    let accountId;
    let accBalance;
    let depAmount;
    let witAmount;

    //opening payload box contents
    //if there is an action, extract account id associated with account
    if(action.payload.accountid){accountId = state.findIndex(account => account._id === action.payload.accountid);}

    if(action.type === "DEPOSIT_CASH") {
        depAmount = action.payload.amount;
        return ( updateState[accountId].balance = parseInt(accBalance + depAmount) )
    }

    else if(action.type === "WITHDRAW_CASH") {
        witAmount = action.payload.amount;
        return ( updateState[accountId].balance = parseInt(accBalance - witAmount ) )
    }

    else
        return state

};

export default accountsReducer;