/**
 * A REDUCER handling selectedScreen in the store.
 * selectedScreen is the UUID of the currently selected screen (which appears on the UI)
 * It is changed when:
 *			new screen is added
 *			different screen is selected
 *			a screen is deleted
 *
 * Affects what is shown in Screens and Viewer panels.
 */

const selectedScreen = (state = "", action) => {
	switch(action.type) {
		case 'ADD_NEW_COMPONENT':
			if (action.compProperties.componentType === "Form") return action.compProperties.Uuid;
			else return state;
		case 'SELECT_SCREEN':
			return action.id
		case 'DELETE_COMPONENT':
			if (state === action.componentId) return "0";
			else return state;
		default:
			return state
	}
}
export default selectedScreen