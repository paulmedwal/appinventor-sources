import { connect } from 'react-redux'
import Properties from '../components/Properties'
import { updateComponent, selectComponent } from '../actions'
import { createSelectedComponentObject } from '../utilFunctions/componentsData'

/**
 * Properties Container handles the Properties panel, links it to component
 * information in store, and manages updates to specific properties.
 */

const mapStateToProps = (state, ownProps) => ({
	selectedComponent: createSelectedComponentObject(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateComponentProperty: (componentId, propertyName, newValue) => {
    dispatch(updateComponent(componentId, propertyName, newValue))
  },

  chooseProperty: (componentId, propertyName, type) => {
    console.log(propertyName);
    switch(type){
      case 'color':
        dispatch({type: "SELECT_COLOR_PROPERTY", name: propertyName})
        break
      case 'asset':
        dispatch({type: "SELECT_IMAGE_PROPERTY", name: propertyName})
        break
    }
  }
})

// selectedComponent and updateComponentProperty are props that Properties.js receives
const PropertiesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Properties)

export default PropertiesContainer
