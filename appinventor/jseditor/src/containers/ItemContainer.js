import { connect } from 'react-redux'
import Item from '../components/s_Item'
import { toggleComponent, selectComponent } from '../actions'


//Get state from the store, passes to props
const mapStateToProps = (state, ownProps) => ({
  selected: state.selectedComponent == ownProps.id,
  component: state.components.filter(function(component) {
    return component.Uuid == ownProps.id;
  })[0],
  parent: state.components.filter(function(component) {
    if (ownProps.parent != null) {
      return component.Uuid == ownProps.parent;
    }
      return false;
  })[0],

})

//Dispatches new states to the store
const mapDispatchToProps = (dispatch, ownProps) => ({
  //Not sure if toggle comp is needed we'll find out 
  chooseComponent: (componentId) => {
    dispatch(selectComponent(componentId))
  }
})


const ItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Item)

export default ItemContainer