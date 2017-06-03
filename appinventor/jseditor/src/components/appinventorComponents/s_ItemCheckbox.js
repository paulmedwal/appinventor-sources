import React, { PropTypes, Component } from 'react';
import simple_components from '../simple_components';

export default class ItemCheckbox extends Component {
	render() {

		var component = this.props.component;
		var defaultPropertiesArray = simple_components.simpleComponents.filter(function(component) {
			return component.name == "CheckBox";
		})[0].properties;

		var defaults = {};
		defaultPropertiesArray.forEach(function(property){
			defaults[property.name] = property.defaultValue;
		})

		var typefaceArray = ["", "sans-serif", "serif", "monospace"];

		var checkboxProps = {};
		defaultPropertiesArray.forEach(function(property){
			if (component[property.name] == null) {
				checkboxProps[property.name] = defaults[property.name];
				if (property.name == "BackgroundColor") {
					checkboxProps["BackgroundColor"] = "";
				}
			} else {
				checkboxProps[property.name] = component[property.name];
			}

		});

		if (checkboxProps["Checked"] == "False") {
			return (
			<div style = {{fontSize: checkboxProps.FontSize + "px",
							backgroundColor: ((checkboxProps.BackgroundColor.length < 6) ? "" : "#" + checkboxProps.BackgroundColor.substr(checkboxProps.BackgroundColor.length-6)),
							color: "#" + checkboxProps.TextColor.substr(checkboxProps.TextColor.length-6),
							fontWeight: ((checkboxProps.FontBold == "False") ? "normal" : "bold"),
							fontStyle: ((checkboxProps.FontItalic == "False") ? "normal" : "italic"),
							fontFamily: typefaceArray[parseInt(checkboxProps.FontTypeface)],
							display: ((checkboxProps.Visible == "True") ? "inline-block" : "none"),
							}}><input type = "checkbox" />{checkboxProps.Text}</div>
			);
		} else {
			return (
				<div style = {{fontSize: checkboxProps.FontSize + "px",
								backgroundColor: ((checkboxProps.BackgroundColor.length < 6) ? "" : "#" + checkboxProps.BackgroundColor.substr(checkboxProps.BackgroundColor.length-6)),
								color: "#" + checkboxProps.TextColor.substr(checkboxProps.TextColor.length-6),
								fontWeight: ((checkboxProps.FontBold == "False") ? "normal" : "bold"),
								fontStyle: ((checkboxProps.FontItalic == "False") ? "normal" : "italic"),
								fontFamily: typefaceArray[parseInt(checkboxProps.FontTypeface)],
								display: ((checkboxProps.Visible == "True") ? "inline-block" : "none"),
								}}><input type = "checkbox" checked />{checkboxProps.Text}</div>
				);
		}

	}
}