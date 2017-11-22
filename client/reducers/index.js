import { combineReducers } from 'redux';
import { responsiveStateReducer } from 'redux-responsive';
import {reducer as burgerMenu} from 'redux-burger-menu';

const reducer = combineReducers({
      browser: responsiveStateReducer,
      burgerMenu: burgerMenu
    }
);

const initialState = {
  burgerMenu: {
    isOpen: false
  }
};

export default reducer;
export default initialState;
