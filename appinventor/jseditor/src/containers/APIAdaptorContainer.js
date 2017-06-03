import { connect } from 'react-redux'
import APIAdaptorPanel from '../components/APIAdaptorPanel'
import { loadProject, selectScreen, clearToggles } from '../actions'
import { convert_scm_to_string } from '../utilFunctions/subcomponentUtils'

/**
 * APIAdaptorContainer.js handles communication with GWT
 *
 */

const mapStateToProps = (state, ownProps) => {
  window.getComponentsInAIAFileFormat = function() {    
    return '#|\n$JSON\n' + convert_scm_to_string(state.components) + '\n|#';
  }.bind(this);
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const loadProjectFromComponents = (components) => {
    dispatch(selectScreen("0"));
    dispatch(clearToggles());
    dispatch(loadProject(components));
  }

  window.jsDesignerLoadProject = loadProjectFromComponents.bind(this);

  return {};
}

const APIAdaptorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(APIAdaptorPanel)

export default APIAdaptorContainer
