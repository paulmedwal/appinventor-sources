import React, { PropTypes, Component } from 'react';
import simple_components from '../simple_components';

export default class ItemTextBox extends Component {
	render() {

		var component = this.props.component;
		var defaultPropertiesArray = simple_components.simpleComponents.filter(function(component) {
			return component.name == "TextBox";
		})[0].properties;

		var defaults = {};
		defaultPropertiesArray.forEach(function(property){
			defaults[property.name] = property.defaultValue;
		})

		var typefaceArray = ["", "sans-serif", "serif", "monospace"];
		var textAlignArray = ["left", "center", "right"];

		var textBoxProps = {};
		defaultPropertiesArray.forEach(function(property){
			if (component[property.name] == null) {
				textBoxProps[property.name] = defaults[property.name];
				if (property.name == "BackgroundColor") {
					textBoxProps["BackgroundColor"] = "&HFFFFFFFF";
				}
			} else {
				textBoxProps[property.name] = component[property.name];
			}
		})


		return (
			<form><input style = {{fontSize:textBoxProps.FontSize + "px", 
							backgroundColor: '#' + textBoxProps.BackgroundColor.substr(textBoxProps.BackgroundColor.length-6),
							color: '#' + textBoxProps.TextColor.substr(textBoxProps.TextColor.length-6),
							fontWeight: ((textBoxProps.FontBold == "False") ? "normal" : "bold"),
							fontStyle: ((textBoxProps.FontItalic == "False") ? "normal" : "italic"),
							fontFamily: typefaceArray[parseInt(textBoxProps.FontTypeface)],
							borderRadius: "2px",
							textAlign: textAlignArray[parseInt(textBoxProps.TextAlignment)],
							display: ((textBoxProps.Visible == "True") ? "inline-block" : "none"),
							padding: "5px",
							}}value = {textBoxProps.Text}/></form>
		);

	}
}