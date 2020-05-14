import React from 'react';
import { connect } from 'react-redux';

import { removeAccount } from "../actions";

import factionCard from "./factionCard";

class accountsList extends React.Component {

    deleteAccount = (accountName) => {
        this.props.removeAccount(accountName.id);           //changed _id -> id
    }


    render(){
        const userAccounts = this.props.accounts.map(accountName => {
            return <factionCard accountName={accountName} key={accountName._id} deleteAccount={this.deleteAccount}/>
        });
        return(
            <ul className = "task-list list-group">
                { userAccounts }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts
    }
}
export default connect(mapStateToProps, { removeAccount })(accountsList);