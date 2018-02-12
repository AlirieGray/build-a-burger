import { createStore, combineReducers } from 'redux';
import burgerReducer from '../reducers/burger';

export default () => {
  // Store creation
  const store = createStore(
    combineReducers({
      burger: burgerReducer
    })
  );

  return store;
}
