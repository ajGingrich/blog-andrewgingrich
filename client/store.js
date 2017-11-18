import { createStore } from 'redux';
import { responsiveStoreEnhancer } from 'redux-responsive';
import reducer from './reducers';

const store = createStore(reducer, responsiveStoreEnhancer);
export default store;
