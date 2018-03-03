import { combineReducers } from 'redux';
import { createResponsiveStateReducer } from 'redux-responsive';
import { sidebar } from './sidebar'
import { reducer as burgerMenu } from 'redux-burger-menu';
import { defaultBreakpoints } from 'constants/constants'

const reducer = combineReducers({
    browser: createResponsiveStateReducer(defaultBreakpoints),
    burgerMenu: burgerMenu,
    sidebar: sidebar
  }
);

export default reducer;
