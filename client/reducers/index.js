import { combineReducers } from 'redux';
import { responsiveStateReducer } from 'redux-responsive';
import { sidebar } from './sidebar'
import { reducer as burgerMenu } from 'redux-burger-menu';

const reducer = combineReducers({
    browser: responsiveStateReducer,
    burgerMenu: burgerMenu,
    sidebar: sidebar
  }
);

export default reducer;
