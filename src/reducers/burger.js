const burgerDefault = [];

export default (state = burgerDefault, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.item]
    default:
      return state;
  }
}
