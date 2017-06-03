import { connect } from 'react-redux'
import ComponentNode from '../components/ComponentNode'
import { toggleComponent, selectComponent } from '../actions'
import { hasChildSelected } from '../utilFunctions/subcomponentUtils'
/**
 * ComponentNodeContainer.js handles the Component nodes, 
 * i.e the components that appear in the Components panel
 * as well as the toggle buttons for the components.
 */

const mapStateToProps = (state, ownProps) => {
	var isSubcompSelected = hasChildSelected(ownProps.id, state.components, state.selectedComponent);

	return ({
	  selectedComponent: state.selectedComponent,
	  toggled: state.toggled,
	  hasSubcompSelected: isSubcompSelected
	})

}

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleComp: (componentId, hasSelectedComp) => {
    dispatch(toggleComponent(componentId, hasSelectedComp))
  },
  chooseComponent: (componentId) => {
    dispatch(selectComponent(componentId))
  }
})

const ComponentNodeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentNode)

export default ComponentNodeContainer
