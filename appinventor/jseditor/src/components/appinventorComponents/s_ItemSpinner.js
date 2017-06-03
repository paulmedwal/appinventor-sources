import React, { PropTypes, Component } from 'react';
import simple_components from '../simple_components';

export default class ItemSpinner extends Component {
	render() {

		var component = this.props.component;
		var defaultPropertiesArray = simple_components.simpleComponents.filter(function(component) {
			return component.name == "Slider";
		})[0].properties;

		var defaults = {};
		defaultPropertiesArray.forEach(function(property){
			defaults[property.name] = property.defaultValue;
		})

		var spinnerProps = {};
		defaultPropertiesArray.forEach(function(property){
			if (component[property.name] == null) {
				spinnerProps[property.name] = defaults[property.name];
			} else {
				spinnerProps[property.name] = component[property.name];
			}

		})

		return (
			<div style = {{padding: "2px",
							display: ((spinnerProps.Visible == "True") ? "inline-block" : "none"),}}><select name="select">
    					<option>Add items...</option>
  						</select></div>
		);

	}
}