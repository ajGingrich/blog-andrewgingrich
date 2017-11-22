import { combineReducers } from 'redux';
import { responsiveStateReducer } from 'redux-responsive';

const reducer = combineReducers({
        browser: responsiveStateReducer,
    }
);

export default reducer;
