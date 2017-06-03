// import simple_components from '../components/simple_components';

/** 
 * ACTIONS - includes:
 * addToBin
 * addNewComponent - adds new component to list of components 
 * updateComponent - updates specific property of a component
 * selectComponent - updates which component is selected
 * toggleComponent - updates component if toggled
 * selectScreen - updates which screen is selected
 * deleteComponent - deletes a component
 * moveComponent
 */

export function addToBin(item) {
	return {
		type: 'ADD_TO_BIN',
		item_type: item.type,
		item_name: item.name,
		id: nextId++
	}
}

let nextId = 2
const createUuid = require('uuid/v4');

export function loadProject(components) {
  return Object.assign({type: 'LOAD_PROJECT_COMPONENTS'}, { components })
}

// action with new component type, screen to add it to, and afterId/dropZoneType
// Effects on store:
//   components: adds new component object with randomly generated uuid
//   toggled: adds new key
//   selectedComponent, selectedScreen: changes to uuid of new screen if form is added
export function addNewComponent(compType, selectedScreen, afterId, dropZoneType) {
  var name = compType + nextId;
  var compProperties = {name:name, componentType: compType, Uuid: createUuid(), version:"1", screenId:selectedScreen};
  return Object.assign({type: 'ADD_NEW_COMPONENT'}, { compProperties, afterId, dropZoneType })
}

// action with ID of component, specific property to be updated, and property's new value
// Effects on store:
//   components: adds/updates value of the property for this component object
export function updateComponent(compId, propertyName, inputValue) {
  var info = {componentId: compId, propertyName: propertyName, propertyInputValue: inputValue};
  return Object.assign({type: 'UPDATE_COMPONENT'}, info)
}

// action with the ID of the component to be selected
// Effects on store:
//   selectedComponent: changed to this component's id
export function selectComponent(compId) {
  return Object.assign({type: 'SELECT_COMPONENT'}, {componentId: compId})
}

// action with ID of component to be toggled and
//        whether or not it has subcomponent that is currently selected.
// Effects on store:
//   selectedComponent: changed to this if a subcomponent is selected (and this is closed)
//   toggled: changes the state of this component to the opposite boolean
export function toggleComponent(compId, hasSelectedSubcomp) {
  return Object.assign({type: 'TOGGLE_COMPONENT'}, {componentId: compId, hasSelectedSubcomp:hasSelectedSubcomp})
}

// action with the ID of the screen to be selected
// Effects on store:
//   selectedComponent, selectedScreen: changed to this screen's id
export function selectScreen(screenId) {
  return Object.assign({type: 'SELECT_SCREEN'}, {id: screenId})
}

export function clearToggles() {
  return Object.assign({type: 'CLEAR_TOGGLES'}, {})
}

// action with the ID of the component to be deleted and the ID of the screen it is in
//    the ID of the screen should be "0" if the component is a form
// Effects on store:
//   selectedComponent: changes to id of screen this component was originally in,
//                      or to Screen1 ("0") if this component is a form
//   selectedScreen: changes to "0" if this component was a form
//   toggled: removes the id key of this component, but not any subcomponent id's
//   components: removes the objects for this component and all subcomponents
export function deleteComponent(compId, selScreen) {
  return Object.assign({type: 'DELETE_COMPONENT'}, {componentId: compId, selectedScreen: selScreen})
}

export function moveComponent(id, afterId, dropZoneType) {
  return Object.assign({type: 'MOVE_COMPONENT'}, {id, afterId, dropZoneType})
}
