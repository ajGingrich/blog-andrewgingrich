//this combines all the reducers

import { combineReducers } from 'redux';
import { reducer as burgerMenu } from 'redux-burger-menu';

const reducer = combineReducers({
        burgerMenu
    }
);

export default reducer;

