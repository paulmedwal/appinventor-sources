import { connect } from 'react-redux'
import RenameComponent from '../components/RenameComponent'
import { updateComponent } from '../actions'

function getName(state, componentId) {
  var name = state.components.filter((w) => w.Uuid == componentId)[0].name;
  return name;
}

//Get State from the Store, passes to props
const mapStateToProps = (state, ownProps) => ({
  visibility: state.editorSettings.renameComponentVisible,
  componentName: getName(state, state.selectedComponent),
  componentId: state.selectedComponent
})

//Dispatches new states to the store
const mapDispatchToProps = (dispatch, ownProps) => ({
  renameComponent: (componentId, newName) => {
    dispatch(updateComponent(componentId, "name", newName))
  },
  closeModal: () => {
    dispatch({type: "CLOSE_MODALS"});
  },
  onComponentNameChange: (value) => {}
})

const RenameComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RenameComponent)

export default RenameComponentContainer