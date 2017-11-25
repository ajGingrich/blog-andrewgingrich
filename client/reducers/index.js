import { combineReducers } from 'redux';
import { responsiveStateReducer } from 'redux-responsive';
import {reducer as burgerMenu} from 'redux-burger-menu';

const reducer = combineReducers({
      browser: responsiveStateReducer,
      burgerMenu: burgerMenu
    }
);

export default reducer;
