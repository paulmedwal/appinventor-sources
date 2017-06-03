import React, { PropTypes, Component } from 'react';
import simple_components from '../simple_components';

export default class ItemListPicker extends Component {
	render() {

		var component = this.props.component;
		var defaultPropertiesArray = simple_components.simpleComponents.filter(function(component) {
			return component.name == "ListPicker";
		})[0].properties;

		var defaults = {};
		defaultPropertiesArray.forEach(function(property){
			defaults[property.name] = property.defaultValue;
		})

		var typefaceArray = ["", "sans-serif", "serif", "monospace"];
		var shapeArray = ["2px", "10px", "0px", "100px / 50px"];
		var textAlignArray = ["left", "center", "right"];

		var listPickerProps = {};
		defaultPropertiesArray.forEach(function(property){
			if (component[property.name] == null) {
				listPickerProps[property.name] = defaults[property.name];
				if (property.name == "BackgroundColor") {
					listPickerProps["BackgroundColor"] = "";
				}
				if (property.name == "Text") {
					listPickerProps["Text"] = "ListPicker";
				}
			} else {
				listPickerProps[property.name] = component[property.name];
			}
		})


		return (
			<div style={{fontSize:listPickerProps.FontSize + "px", 
							backgroundColor: '#' + listPickerProps.BackgroundColor.substr(listPickerProps.BackgroundColor.length-6),
							color: '#' + listPickerProps.TextColor.substr(listPickerProps.TextColor.length-6),
							fontWeight: ((listPickerProps.FontBold == "False") ? "normal" : "bold"),
							fontStyle: ((listPickerProps.FontItalic == "False") ? "normal" : "italic"),
							fontFamily: typefaceArray[parseInt(listPickerProps.FontTypeface)],
							borderRadius: shapeArray[parseInt(listPickerProps.Shape)],
							backgroundImage: listPickerProps.Image,
							textAlign: textAlignArray[parseInt(listPickerProps.TextAlignment)],
							display: ((listPickerProps.Visible == "True") ? "inline-block" : "none"),
							padding: "5px"
						    }}>{listPickerProps.Text}</div>
		);

	}
}