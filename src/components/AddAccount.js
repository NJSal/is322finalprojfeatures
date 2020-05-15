import React from 'react';
import { connect } from 'react-redux';

import { addAccount } from "../actions";

class AddAccount extends React.Component{
    state = { newAc: ''}

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

            </form>
        );
    }
}

export default connect(null, {addAccount})(AddAccount);