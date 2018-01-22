import { createStore, combineReducers } from 'redux';
import burgerReducer from '../reducers/burger';
import priceReducer from '../reducers/price';

export default () => {
  // Store creation
  const store = createStore(
    combineReducers({
      burger: burgerReducer,
      price: priceReducer
    })
  );

  return store;
}
