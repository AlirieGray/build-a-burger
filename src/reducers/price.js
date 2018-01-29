const priceDefault = 0;

export default (state = priceDefault, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.change;
    case 'DECREMENT':
      return state + action.change;
    default:
      return state;
  }
}
