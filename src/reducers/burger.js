const burgerDefault = {
  protein: 'Beef',
  weight: '1/3 lb',
  bun: 'Brioche Style Bun',
  cheese: [],
  toppings: [],
  premium: [],
  sauces: []
}

export default (state = burgerDefault, action) => {
  switch (action.type) {
    case PICK_PROTEIN:
      return {
        ...state,
        protein: action.protein
      };
    case PICK_WEIGHT:
      return {
        ...state,
        weight: action.weight
      };
    case PICK_BUN:
      return {
        ...state,
        bun: action.bun
      };
    case ADD_CHEESE:
      return {
        ...state,
        cheese: [...state.cheese, action.cheese]
      };
    case ADD_TOPPING:
      return {
        ...state,
        toppings: [...state.toppings, action.topping]
      };
    case ADD_PREMIUM:
      return {
        ...state,
        premium: [...state.premium, action.premium]
      };
    case ADD_SAUCE:
      return {
        ...state,
        sauces: [...state.sauces, action.sauces]
      }
  }
}
