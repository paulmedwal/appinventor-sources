const uploadedImage = (state = {}, action) => {
  switch (action.type) {
    case 'UPLOAD_IMAGE': 
      return action.url
    default:
      return state
  }
} 


const uploadedImages = (state = [], action) => {
  switch(action.type) {
    case 'UPLOAD_IMAGE':
      let newState = [...state, uploadedImage(undefined, action)]
      console.log(newState)
      return newState
    default:
      return state
  }
} 

export default uploadedImages