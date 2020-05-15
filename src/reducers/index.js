import { combineReducers } from 'redux';

//import userChoiceReducer from './userChoiceReducer';
import errorReducer from './errorReducer';
import AccountsReducer from './AccountsReducer';

export default combineReducers( {

    //tasks: userChoiceReducer,
    accounts: AccountsReducer,
    errors: errorReducer,

});
