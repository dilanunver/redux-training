

const vegetablesReducer = (state = { vegetables: [] }, action) => {
  switch (action.type) {
    case 'ADD_VEGETABLE':
      return {
        vegetables: [...state.vegetables, action.vegetable]
      }
    default:
      return state
  }
}

export default vegetablesReducer