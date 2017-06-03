import React, { PropTypes, Component } from 'react';
import simple_components from '../simple_components';

export default class ItemPasswordTextBox extends Component {
	render() {

		var component = this.props.component;
		var defaultPropertiesArray = simple_components.simpleComponents.filter(function(component) {
			return component.name == "PasswordTextBox";
		})[0].properties;

		var defaults = {};
		defaultPropertiesArray.forEach(function(property){
			defaults[property.name] = property.defaultValue;
		})

		var textAlignArray = ["left", "center", "right"];

		var passwordTextBoxProps = {};
		defaultPropertiesArray.forEach(function(property){
			if (component[property.name] == null) {
				passwordTextBoxProps[property.name] = defaults[property.name];
				if (property.name == "BackgroundColor") {
					passwordTextBoxProps["BackgroundColor"] = "";
				}
			} else {
				passwordTextBoxProps[property.name] = component[property.name];
			}

		})

		return (
			<div><form><input style = {{backgroundColor:'#' + passwordTextBoxProps.BackgroundColor.substr(passwordTextBoxProps.BackgroundColor.length-6),
										fontSize: passwordTextBoxProps.FontSize + "px",
										display: ((passwordTextBoxProps.Visible == "True") ? "inline-block" : "none"),
										color: "#" + passwordTextBoxProps.TextColor.substr(passwordTextBoxProps.TextColor.length-6),
										textAlign: textAlignArray[parseInt(passwordTextBoxProps.TextAlignment)],
										}}type="password" name="password" value="password"/></form></div>
		);

	}
}