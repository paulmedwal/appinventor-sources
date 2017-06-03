import React, { PropTypes, Component } from 'react';
import simple_components from '../simple_components';

export default class ItemSlider extends Component {
	render() {

		var component = this.props.component;
		var defaultPropertiesArray = simple_components.simpleComponents.filter(function(component) {
			return component.name == "Slider";
		})[0].properties;

		var defaults = {};
		defaultPropertiesArray.forEach(function(property){
			defaults[property.name] = property.defaultValue;
		})

		var sliderProps = {};
		defaultPropertiesArray.forEach(function(property){
			if (component[property.name] == null) {
				sliderProps[property.name] = defaults[property.name];
			} else {
				sliderProps[property.name] = component[property.name];
			}

		})

		return (
			<div style = {{padding: "2px",
							display: ((sliderProps.Visible == "True") ? "inline-block" : "none"),}}>Slider Picture</div>
		);

	}
}