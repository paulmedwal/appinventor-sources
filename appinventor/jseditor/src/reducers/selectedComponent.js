
/*
 * A REDUCER handling selectedComponent in the store.
 * selectedComponent is the UUID of the currently selected component.
 * It is changed when:
 *			component is selected
 * 			component or ancestor is toggled
 *			new component is added
 *			screen is selected
 *
 * Affects what is shown in Components and Properties panels.
 */

const selectedComponent = (state = "", action) => {
	switch(action.type) {
		case 'SELECT_COMPONENT':
			return action.componentId
		case 'TOGGLE_COMPONENT':
			if (action.hasSelectedSubcomp) return action.componentId;
			else return state;
		case 'ADD_NEW_COMPONENT':
			if (action.compProperties.componentType === "Form") {
				return action.compProperties.Uuid;
			}
			else return state;
		case 'SELECT_SCREEN':
			return action.id
		case 'DELETE_COMPONENT':
			return action.selectedScreen;
		default:
			return state
	}
}
export default selectedComponent