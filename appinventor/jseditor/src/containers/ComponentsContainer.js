import { connect } from 'react-redux'
import ComponentsPanel from '../components/ComponentsPanel'
import { deleteComponent, loadProject, selectScreen, clearToggles } from '../actions'
import { create_tree, convert_scm_to_string } from '../utilFunctions/subcomponentUtils'

/**
 * ComponentsContainer.js handles the Components panel in AI, as well as 
 * the link between the Components panel and the Properties panel
 */

const mapStateToProps = (state, ownProps) => {
  const projectTree = create_tree(state.components, state.selectedScreen);
  return {
    selectedComponent: state.selectedComponent,
    selectedScreen: state.selectedScreen,
    projectTree: projectTree
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeComponent: (uuid, selectedScreen, delScreen=false) => {
      dispatch(deleteComponent(uuid, selectedScreen, delScreen))
    },
    renameModal: () => {
  	  dispatch({type: "SELECT_RENAME_COMPONENT", name: "name"})
    }
  }
}

const ComponentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentsPanel)

export default ComponentsContainer
