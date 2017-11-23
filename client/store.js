import { createStore } from 'redux';
import { responsiveStoreEnhancer } from 'redux-responsive';
import reducer from './reducers';

const store = createStore(
  reducer,
  //initialState,
  responsiveStoreEnhancer);
export default store;
