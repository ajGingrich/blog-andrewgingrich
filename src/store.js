import { createStore } from 'redux';
import { responsiveStoreEnhancer } from 'redux-responsive';
import reducer from './reducers';

const store = createStore(
  reducer, //combine reducers has the initialState
  responsiveStoreEnhancer);

export default store;
