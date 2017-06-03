import { getAllSubcomponents } from '../utilFunctions/subcomponentUtils'
import { createComponentName } from '../utilFunctions/componentsData'
import { insertUuidIntoState, insertingIntoDescendant } from './utils/updateStateUtils';
import { findIndex, forEach, remove } from "lodash";
import { DropZoneTypes } from "../constants/DropZoneTypes";
import { ComponentTypes } from "../constants/ComponentTypes";

/** 
 * A REDUCER handling components in the store.
 * components is an array of objects, one object for each component.
 * A default object should contain name, type, version, and uuid.
 * Other properties of a component are not stored until a property is changed.
 * 
 * It is changed when:
 * 			new component is added to store
 *			component property is updated with new input value
 *			component is deleted - its subcomponents are also deleted
 *			component is moved (arrangements)
 *
 * Affects what is shown in Components, Viewer, and Properties panels. 
 */

// creates component
const component = (state = {}, action) => {
	var componentPropertyNames = [];
	var newState = {}
	switch (action.type) {
		case 'ADD_NEW_COMPONENT':
			componentPropertyNames = Object.keys(action.compProperties);
			componentPropertyNames.forEach(function(property) {
				if (property !== "type" && property !== "screenId") {
			  		newState[property] = action.compProperties[property];
				}
			});
			return newState

		case 'UPDATE_COMPONENT':
			// assume that state.componentId == action.componentId, bc of components function below
			componentPropertyNames = Object.keys(state);
			componentPropertyNames.forEach(function(property) {
				newState[property] = state[property];
			})
			newState[action.propertyName] = action.propertyInputValue;
			return newState

		default:
			return state
	}
}

// store has array of components...update store
const components = (state = [], action) => {
	switch(action.type) {
		case 'LOAD_PROJECT_COMPONENTS':
			return action.components;
		case 'ADD_NEW_COMPONENT':
			var newName = createComponentName(action.compProperties.componentType, state);
			var newComponent = component(undefined, action);
			newComponent["name"] = newName;
			if (action.compProperties.componentType == "Form") {
				return [...state, newComponent];
			}
			var newState = state.map(component => Object.assign({},component))
			var insertInChildren = action.dropZoneType === DropZoneTypes.CONTENT;
			var updatedState = insertUuidIntoState([...newState, newComponent], action.compProperties.Uuid, action.afterId, insertInChildren);
			return updatedState
			// return [...state, component(undefined, action)]

		// case 'UPDATE_COMPONENT':
		// search through array
		// find which one has id
		// then update property

		/** 
		 * Searches through the list of components, finds the component with 
		 * the given ID, and then updates the value of the specified property
		 */
		case 'UPDATE_COMPONENT':
			var newState = state.map(component => Object.assign({},component));
			for (var i=0; i<state.length;i++) {
				if (state[i].Uuid === action.componentId) {
					newState[i] = component(state[i], action);
				}
			}
			console.log(action)
			return newState

		/** 
		 * Deletes the specified screen and all subcomponents.
		 * If screen is "Screen1", i.e. component id = "0", nothing happens
		 */
		case 'DELETE_COMPONENT':
			var subComps = getAllSubcomponents(action.componentId, state);
			var newState = [];
			state.forEach(function(component) {
				var componentObj = Object.assign({}, component);
				if (componentObj.children && componentObj.children.includes(action.componentId)) {
					// find index of input in it's parent's array of children
					var index = componentObj.children.indexOf(action.componentId);
					// slice - create a copy of array
					var children = componentObj.children.slice();
					// splice - modifies array, deletes # items starting at index
					children.splice(index, 1);
					componentObj.children = children;
				}

				// if component is not a subcomponent of input
				if (!subComps.hasOwnProperty(componentObj.Uuid)) {
					// add the component to new state
					newState.push(componentObj);
				}
			})
			return newState;

		case 'MOVE_COMPONENT':
			if (!insertingIntoDescendant(action.id, action.afterId, state)) {
				var newState = state.map(component => Object.assign({},component))
				var insertInChildren = action.dropZoneType === DropZoneTypes.CONTENT;
				const index = findIndex(newState, (component) => {
					const childIndex = findIndex(component.children, (child) => {
						// for some reason only checking first child in children list TODO
						return child == action.id;
					});
					if (childIndex > -1) {
						return true;
					}
					return false;
				});
				remove(newState[index].children, (id) => { return id == action.id; });

				
				return insertUuidIntoState(newState, action.id, action.afterId, insertInChildren);
			} else {
				return state;
			}


		default:
			return state
	}
}

export default components