
const burgerDefault = {
  protein: 'Beef',
  bun: 'Brioche',
  weight: '1/3 lb',
  cheeses: [],
  sauces: [],
  toppings: [],
  premium: []
}

export default (state = burgerDefault, action) => {
  switch (action.type) {
    case 'CHANGE_PROTEIN':
      return { ...state, protein: action.item }
    case 'CHANGE_WEIGHT':
      return { ...state, weight: action.item }
    case 'CHANGE_BUN':
      return { ...state, bun: action.item }
    case 'ADD_CHEESE':
      var newCheeses = [...state.cheeses];
      newCheeses.push(action.item);
      console.log(newCheeses);
      return {...state, cheeses: newCheeses}
    case 'REMOVE_CHEESE':
      return { ...state, cheeses: state.cheeses.filter((cheese) => {
        return cheese !== action.item;
      }) }
    case 'ADD_SAUCE':
      var newSauces = [...state.sauces];
      newSauces.push(action.item);
      return {...state, sauces: newSauces}
    case 'REMOVE_SAUCE':
    return { ...state, sauces: state.sauces.filter((sauce) => {
      return sauce !== action.item;
    }) }
    case 'ADD_TOPPING':
      var newToppings = [...state.toppings];
      newToppings.push(action.item);
      return {...state, toppings: newToppings}
    case 'REMOVE_TOPPING':
      return { ...state, toppings: state.toppings.filter((topping) => {
        return topping !== action.item;
      }) }
    case 'ADD_PREMIUM':
      var newPremium = [...state.premium];
      newPremium.push(action.item);
      return {...state, premium: newPremium}
    case 'REMOVE_PREMIUM':
      return { ...state, premium: state.premium.filter((premium) => {
        return premium !== action.item;
      }) }
    default:
      return state;
  }
}
