const burgerDefault = [
  { type:'Protein', name: 'Beef' },
  { type:'Bun', name: 'Brioche' },
  { type:'Weight', name: '1/3 lb'},
  { type:'Cheese', name: 'Swiss' },
  { type:'Sauce', name: 'The Counter Relish' },
  { type:'Toppings', name: 'Organic Mixed Greens' },
  { type:'Premium Toppings', name: 'Avocado' }
];

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
            filteredBurger.push({ type:action.item.type, name:action.item.name });
          } else {
            filteredBurger.push(state[i]);
          }
        }
        return filteredBurger;
      } else {
        return [...state, { type:action.item.type, name: action.item.name }]
      }
    default:
      return state;
  }
}
