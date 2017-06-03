import React, { PropTypes, Component } from 'react';
import simple_components from '../simple_components';

export default class ItemTimePicker extends Component {
	render() {

		var component = this.props.component;
		var defaultPropertiesArray = simple_components.simpleComponents.filter(function(component) {
			return component.name == "TimePicker";
		})[0].properties;

		var defaults = {};
		defaultPropertiesArray.forEach(function(property){
			defaults[property.name] = property.defaultValue;
		})

		var typefaceArray = ["", "sans-serif", "serif", "monospace"];
		var shapeArray = ["2px", "10px", "0px", "100px / 50px"];
		var textAlignArray = ["left", "center", "right"];

		var timePickerProps = {};
		defaultPropertiesArray.forEach(function(property){
			if (component[property.name] == null) {
				timePickerProps[property.name] = defaults[property.name];
				if (property.name == "BackgroundColor") {
					timePickerProps["BackgroundColor"] = "";
				}
				if (property.name == "Text") {
					timePickerProps["Text"] = "Text for TimePicker";
				}
			} else {
				timePickerProps[property.name] = component[property.name];
			}
		})


		return (
			<div style={{fontSize:timePickerProps.FontSize + "px", 
							backgroundColor: '#' + timePickerProps.BackgroundColor.substr(timePickerProps.BackgroundColor.length-6),
							color: '#' + timePickerProps.TextColor.substr(timePickerProps.TextColor.length-6),
							fontWeight: ((timePickerProps.FontBold == "False") ? "normal" : "bold"),
							fontStyle: ((timePickerProps.FontItalic == "False") ? "normal" : "italic"),
							fontFamily: typefaceArray[parseInt(timePickerProps.FontTypeface)],
							borderRadius: shapeArray[parseInt(timePickerProps.Shape)],
							backgroundImage: timePickerProps.Image,
							textAlign: textAlignArray[parseInt(timePickerProps.TextAlignment)],
							display: ((timePickerProps.Visible == "True") ? "inline-block" : "none"),
							padding: "5px"
						    }}>{timePickerProps.Text}</div>
		);

	}
}