
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
    case 'ADD_CHEESE':
      console.log('redux cheese')
      var newCheeses = [...state.cheeses];
      newCheeses.push(action.item);
      console.log(newCheeses);
      return {...state, cheeses: newCheeses}
    case 'REMOVE_CHEESE':
      // var newCheese = state.cheese.filter((cheese) => {
      //
      // } )
      return { ...state }
    case 'CHANGE_BUN':
      return { ...state, bun: action.item }
    default:
      return state;
  }
}

// const burgerDefault = [
//   { type:'Protein', name: 'Beef' },
//   { type:'Bun', name: 'Brioche' },
//   { type:'Weight', name: '1/3 lb'},
// ];


/*
export default (state = burgerDefault, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // first check if you can have more than one of the item
      // if so, simply add the item
      // otherwise, find the existing item of that type and replace it
      // by creating a new array
      if (action.item.isRadio) {
        var filteredBurger = [];
        for (var i = 0; i < state.length; i++) {
          if (state[i].type == action.item.type) {
            filteredBurger.push({ type: action.item.type, name: action.item.name });
          } else {
            filteredBurger.push(state[i]);
          }
        }
        return filteredBurger;
      } else {
        console.log('adding non-radio item')
        return [...state, { type: action.item.type, name: action.item.name }]
      }
    case 'REMOVE_ITEM':
      return state.filter(item => item.name != action.item.name);
    default:
      return state;
  }
}
*/
