import { combineReducers } from 'redux';
import { reducer as burgerMenu } from 'redux-burger-menu';
import { responsiveStateReducer } from 'redux-responsive';

const reducer = combineReducers({
        burgerMenu,
        browser: responsiveStateReducer,
    }
);

export default reducer;
