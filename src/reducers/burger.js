const burgerDefault = [
  { type:'Protein', name:'Beef' },
  { type:'Bun', name:'Wheat' },
  { type:'Sauce', name:'The Counter Relish' },
  { type:'Toppings', name:['Organic Mixed Greens'] },
  { type:'Premium Toppings', name:['Avocado'] }
];

export default (state = burgerDefault, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.item]
    default:
      return state;
  }
}
