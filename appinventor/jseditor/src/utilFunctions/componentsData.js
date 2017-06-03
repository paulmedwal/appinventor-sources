import { ComponentTypes } from "../constants/ComponentTypes";

// returns the names of all possible component types
export function getAllComponentTypes() {
	var allComponentTypes = Object.keys(ComponentTypes).map(key => ComponentTypes[key]).reduce((a, b) => a.concat(b),[]);
	return allComponentTypes;
}

// returns the names of all components currently stored in state
// used in Rename component
export function getAllComponentNames(state) {
	var allExistingNames = state.components.map(component => component.name);
	return allExistingNames;
}


// given the state, returns the object in components that 
// corresponds to the Uuid stored in selectedComponent
// used in Properties and Rename containers
export function createSelectedComponentObject(state) {
	var selectComponentObj = {};
	for (var i=0; i<state.components.length; i++) {
		if (state.components[i].Uuid === state.selectedComponent) {
			selectComponentObj = state.components[i];
			break;
		}
		else {
			selectComponentObj = state.components[0];
		}
	}
	return selectComponentObj;
}

// called by components reducer for ADD_NEW_COMPONENT
export function createComponentName(componentType, components) {
	var newNum = findHighestNumberInName(componentType, components) + 1;
	// console.log(newNum)
	var typeName = componentType == "Form" ? "Screen" : componentType;
	return typeName + newNum;
}

// finds the highest number that appears in a component name of the form (type + number)
function findHighestNumberInName(type, components) {
	var maxNum = 0;
	for (var i = 0; i < components.length; i++) {
		if (components[i].componentType == type) {
			console.log(components[i])
			var name = components[i].name;
			var typeName = type == "Form" ? "Screen" : type;
			if (name.indexOf(typeName) == 0) {
				var number = parseInt(name.substring(typeName.length));
				if (number != NaN) {
					maxNum = Math.max(number, maxNum);
				}
			}
		}
	}
	// console.log(maxNum)
	return maxNum;
}