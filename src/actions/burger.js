
export const addCheese = ( item ) => {
  return {
    type: 'ADD_CHEESE',
    item
  }
}

export const changeBun = ( item ) => {
  return {
    type: 'CHANGE_BUN',
    item
  }
}

export const removeCheese = ( item ) => {
  return {
    type: 'REMOVE_CHEESE',
    item
  }
}

export const removeItem = ( item ) => {
  return {
    type: 'REMOVE_ITEM',
    item
  }
}
