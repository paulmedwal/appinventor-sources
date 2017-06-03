import React, { Component } from 'react';
import simple_components from './simple_components';
import EditorTypes from './EditorTypes';
import { PropertyEditorTypes } from '../constants/PropertyEditorTypes.js'
import RenameContainer from '../containers/RenameContainer'

/**
 * Properties component creates the Properties panel by listing out all the
 * properties of the selected Component and their editor Types.
 * It also sets the editor Types to the values for the component's properties,
 * or the default values if selectedComponent does not include those properties.
 */


export default class Properties extends Component {
	render() {
		var thisComponent = this;
		var selectedComponent = this.props.selectedComponent;

		// Get the list of property objects for the selected component
		// Use simple_components to get list
		var allComponents = simple_components.simpleComponents;
		var propertyObjectsOfComponent = [];
		for (var j=0; j<allComponents.length;j++) {
			if (allComponents[j].name===selectedComponent.componentType) {
				propertyObjectsOfComponent = allComponents[j]["properties"].slice();
			}
		}

		var typeToHTML = PropertyEditorTypes;

		// Function that returns the HTML for the specified editor type
		// 		HTML includes function that allows update of specific property
		// 		If editor type is not here, return null
		var getEditorTypeHTML = function(editorType, inputValue, componentId, propertyName) {
			var EdType = typeToHTML[editorType];
			if (EdType) {
				return <EdType value={inputValue} componentId={componentId} propertyName={propertyName} 
				onChangeFunction={thisComponent.props.updateComponentProperty} selectFunction = {thisComponent.props.chooseProperty}/>
			}
			else return null;
		}

		var editorTypeArr = [];
		// for each property object
		for (var i=0; i<propertyObjectsOfComponent.length; i++) {
			var compPropty = propertyObjectsOfComponent[i];

			// set property value to most updated value, else set it to default value
			if (selectedComponent[compPropty.name]) {
				var editorTypeHTML = getEditorTypeHTML(compPropty.editorType, selectedComponent[compPropty.name], selectedComponent.Uuid, compPropty.name)
			}
			else {
				editorTypeHTML = getEditorTypeHTML(compPropty.editorType, compPropty.defaultValue, selectedComponent.Uuid, compPropty.name)
			}

			// if editor type returns valid HTML, add property object to array
			// else add Hi button (for color and upload input types)
			if (editorTypeHTML) {
				editorTypeArr.push({"name":compPropty.name, "editorType":editorTypeHTML});
			}
			else {
				editorTypeArr.push({"name":propertyObjectsOfComponent[i].name, "editorType":<button type="button">Hi</button>, "defaultValue": "Hi"});
			}
		}

		var componentNameEditor = getEditorTypeHTML("string", selectedComponent.name, selectedComponent.Uuid, "name");

		// componentNameEditor = <input type="text" style={{backgroundColor:"default"}} value={selectedComponent.name} onChange={(event)=>thisComponent.props.updateComponentProperty(selectedComponent.Uuid, "name", event.target.value)} />

		// for each property object in the editorTypeArr array,  
		// show the property name and the editor Type.
		return (
			<div>
				<span style={{fontWeight:'bold'}}>{selectedComponent.name}</span>
				<br/>
				<RenameContainer />
				<hr/>
				{editorTypeArr.map(({name, editorType}) =>
					<span key={name}> {name} 
						<br/>
						{editorType}
					<br/>
					</span>
				)}
			</div>
		);
	}

}