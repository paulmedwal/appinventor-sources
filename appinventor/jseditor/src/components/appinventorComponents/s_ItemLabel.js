import React, { PropTypes, Component } from 'react';
import simple_components from '../simple_components';

export default class ItemLabel extends Component {
	render() {

		var component = this.props.component;
		var defaultPropertiesArray = simple_components.simpleComponents.filter(function(component) {
			return component.name == "Label";
		})[0].properties;

		var defaults = {};
		defaultPropertiesArray.forEach(function(property){
			defaults[property.name] = property.defaultValue;
		})

		var typefaceArray = ["", "sans-serif", "serif", "monospace"];
		var textAlignArray = ["left", "center", "right"];

		var labelProps = {};
		defaultPropertiesArray.forEach(function(property){
			if (component[property.name] == null) {
				labelProps[property.name] = defaults[property.name];
				if (property.name == "BackgroundColor") {
					labelProps["BackgroundColor"] = "";
				}
				if (property.name == "Text") {
					labelProps["Text"] = "Label Text";
				}
			} else {
				labelProps[property.name] = component[property.name];
			}

			if (property.name == "Enabled") {
				if (labelProps[property.name] == "True") {
					labelProps["Disabled"] = false;
				} else {
					labelProps["Disabled"] = "disabled";
				}
			}
		})

		if (labelProps["HTMLFormat"] == "True") {
			return (
				//TODO: convert string into HTML
				<div>{labelProps.Text}</div>
				);
		}

		return (
			<div style = {{fontSize: labelProps.FontSize + "px",
							backgroundColor: ((labelProps.BackgroundColor.length < 6) ? "" : "#" + labelProps.BackgroundColor.substr(labelProps.BackgroundColor.length-6)),
							color: "#" + labelProps.TextColor.substr(labelProps.TextColor.length-6),
							fontWeight: ((labelProps.FontBold == "False") ? "normal" : "bold"),
							fontStyle: ((labelProps.FontItalic == "False") ? "normal" : "italic"),
							fontFamily: typefaceArray[parseInt(labelProps.FontTypeface)],
							textAlign: textAlignArray[parseInt(labelProps.TextAlignment)],
							display: ((labelProps.Visible == "True") ? "inline-block" : "none"),
							}}>{labelProps.Text}</div>
		);

	}
}