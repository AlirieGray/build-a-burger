
export const addItem = ( item ) => {
  return {
    type: 'ADD_ITEM',
    item
  }
}

export const removeItem = ( item ) => {
  return {
    type: 'REMOVE_ITEM',
    item
  }
}
