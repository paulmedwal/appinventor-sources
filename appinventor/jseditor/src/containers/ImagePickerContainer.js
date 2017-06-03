import { connect } from 'react-redux'
import ImagePicker from '../components/ImagePicker'
import { addNewComponent, updateComponent } from '../actions'

//Get State from the Store, passes to props
const mapStateToProps = (state, ownProps) => ({
  defaultImages: state.defaultImages,
  uploadedImages: state.uploadedImages,
  visibility: state.editorSettings.imagePickerVisible,
  selectedImage: state.editorSettings.selectedImage,
  component: state.selectedComponent,
  property: state.editorSettings.selectedProperty,
})

//Dispatches new states to the store
const mapDispatchToProps = (dispatch, ownProps) => ({
  addComponent: (type) => {
    dispatch(addNewComponent(type))
  },
  uploadImage: () => {
  	dispatch({type: "UPLOAD_IMAGE", url: "http://r.ddmcdn.com/w_606/s_f/o_1/cx_0/cy_15/cw_606/ch_404/APL/uploads/2014/06/10-kitten-cuteness-1.jpg"})
  },
  selectImage: (componentId, propertyName, url) => {
    dispatch(updateComponent(componentId, propertyName, url))
  },
  closeModal: () => {
    dispatch({type: "CLOSE_MODALS"});
  }
})

const ImagePickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImagePicker)

export default ImagePickerContainer