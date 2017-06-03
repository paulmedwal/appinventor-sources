const dustbin = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_BIN': 
      return {
        name: action.item_name,
        type: action.item_type,
        id: action.id
      }

    default:
      return state
  }
} 


const dustbins = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TO_BIN':
      let dropped = [...state, dustbin(undefined, action)]
      console.log(dropped)
      return dropped
    default:
      return state
  }
} 

export default dustbins