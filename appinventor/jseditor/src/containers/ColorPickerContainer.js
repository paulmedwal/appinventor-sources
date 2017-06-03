import { connect } from 'react-redux'
import ColorPicker from '../components/ColorPicker'
import { addNewComponent, updateComponent } from '../actions'

//Get State from the Store, passes to props
const mapStateToProps = (state, ownProps) => ({
  visibility: state.editorSettings.colorPickerVisible,
  defaultColors: state.defaultColors,
  selectedColor: state.editorSettings.selectedColor,
  component: state.selectedComponent,
  property: state.editorSettings.selectedProperty,
  
})

//Dispatches new states to the store
const mapDispatchToProps = (dispatch, ownProps) => ({
  selectColor: (componentId, propertyName, color) => {
    console.log(propertyName);
    dispatch(updateComponent(componentId, propertyName, color))
  },
  closeModal: () => {
    dispatch({type: "CLOSE_MODALS"});
  }
})

const ColorPickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorPicker)

export default ColorPickerContainer