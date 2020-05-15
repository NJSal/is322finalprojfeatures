import React from 'react';
import { connect } from 'react-redux';

import { addAccount } from "../actions";

class AddAccount extends React.Component{
    state = { newAc: '', newBalance: ''}

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.addAccount(this.state.newAc);
        this.setState({ newAc: ''})
    };

    render(){
        return(
            <form className = "form-group" onSubmit = {this.onFormSubmit}>
                <label> Register Account. Raid The Lannisters for the money! </label>
                <input type = "text" className = "form-control"
                       name = "newAc"
                       value = {this.state.newAccount}
                       onChange={(e) => this.setState({newAccount: e.target.value})}/>
                {/****
                 <label> Please set Up the Balance after Seeing the Lannisters </label>
                <input type = "text" classname = "form-control"
                       name = "newBalance"
                       value  = {this.state.newBalance}
                       onChange={(e) => this.setState({newAccount: e.target.value})}/>  *****/}
            </form>
        );
    }
}

export default connect(null, {addAccount})(AddAccount);