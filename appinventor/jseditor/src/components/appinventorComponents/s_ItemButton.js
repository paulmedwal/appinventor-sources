import React, { PropTypes, Component } from 'react';
import simple_components from '../simple_components';

export default class ItemButton extends Component {
	render() {

		var component = this.props.component;
		var defaultPropertiesArray = simple_components.simpleComponents.filter(function(component) {
			return component.name == "Button";
		})[0].properties;

		var defaults = {};
		defaultPropertiesArray.forEach(function(property){
			defaults[property.name] = property.defaultValue;
		})

		var typefaceArray = ["", "sans-serif", "serif", "monospace"];
		var shapeArray = ["5px", "10px", "0px", "100px / 50px"];

		var buttonProps = {};
		defaultPropertiesArray.forEach(function(property){
			if (component[property.name] == null) {
				buttonProps[property.name] = defaults[property.name];
				if (property.name == "BackgroundColor") {
					buttonProps["BackgroundColor"] = "&H00FFFFFF";
				}
				if (property.name == "TextColor") {
					buttonProps["TextColor"] = '&H00000000';
				}
			} else {
				buttonProps[property.name] = component[property.name];
			}

			if (property.name == "Enabled") {
				if (buttonProps[property.name] == "True") {
					buttonProps["Disabled"] = false;
				} else {
					buttonProps["Disabled"] = "disabled";
				}
			}
		});

		return (
			<div style={{fontSize:buttonProps.FontSize + "px", 
							backgroundColor: '#' + buttonProps.BackgroundColor.substr(buttonProps.BackgroundColor.length-6),
							color: '#' + buttonProps.TextColor.substr(buttonProps.TextColor.length-6),
							fontWeight: ((buttonProps.FontBold == "False") ? "normal" : "bold"),
							fontStyle: ((buttonProps.FontItalic == "False") ? "normal" : "italic"),
							fontFamily: typefaceArray[parseInt(buttonProps.FontTypeface)],
							borderRadius: shapeArray[parseInt(buttonProps.Shape)],
							backgroundImage: buttonProps.Image,
							display: ((buttonProps.Visible == "True") ? "inline-block" : "none"),
							padding: "5px",
							borderStyle: "outset",
							borderWidth: "2px",
							opacity: ((buttonProps.Disabled) == "disabled" ? "0.7" : "1.0")
						    }}>{buttonProps.Text}</div>
		);
	}
}