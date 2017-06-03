// import { getAllSubcomponents } from '../components/helperFunctions'

/**
 * A REDUCER handling toggled in the store.
 * toggled is an object mapping component UUIDs to a boolean.  
 * 		True means subcomponents are shown.  False means subcomponents are hidden.
 * It is changed when:
 * 		a component is toggled
 *		new component is added and needs to be kept track of
 *		a component is deleted - its subcomponents are NOT deleted
 *
 * Affects what is shown in Components panel.
 */

const toggled = (state = {}, action) => {
	var newState = Object.assign({}, state);
	switch(action.type) {
		case 'CLEAR_TOGGLES':
			return {};
		case 'TOGGLE_COMPONENT':
			newState[action.componentId] = !newState[action.componentId]
			return newState
		case 'ADD_NEW_COMPONENT':
			newState[action.compProperties.Uuid] = true;
			return newState;
		case 'DELETE_COMPONENT':
			delete newState[action.componentId];
			return newState;
		default:
			return state
	}
}
export default toggled