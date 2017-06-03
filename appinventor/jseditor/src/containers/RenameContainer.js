import { connect } from 'react-redux'
import Rename from '../components/Rename'
import { updateComponent } from '../actions'
import { createSelectedComponentObject, getAllComponentNames, getAllComponentTypes } from '../utilFunctions/componentsData'

/**
 *	Rename Container handles the Rename component, which is the textbox at the top of 
 * 	the Properties panel that will hold the selected component's name.
 */

const mapStateToProps = (state, ownProps) => ({
 	selectedComponentName: createSelectedComponentObject(state).name,
 	selectedComponentId: createSelectedComponentObject(state).Uuid,
 	existingNames: getAllComponentNames(state),
 	componentTypes: getAllComponentTypes()
 })

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateComponentProperty: (componentId, newValue) => {
    dispatch(updateComponent(componentId, "name", newValue))
  }
})

const RenameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Rename)

export default RenameContainer
