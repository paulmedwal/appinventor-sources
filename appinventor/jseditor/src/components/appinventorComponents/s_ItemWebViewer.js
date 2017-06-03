import React, { PropTypes, Component } from 'react';
import simple_components from '../simple_components';

export default class WebViewer extends Component {
	render() {

		var component = this.props.component;
		var defaultPropertiesArray = simple_components.simpleComponents.filter(function(component) {
			return component.name == "Slider";
		})[0].properties;

		var defaults = {};
		defaultPropertiesArray.forEach(function(property){
			defaults[property.name] = property.defaultValue;
		})

		var webViewerProps = {};
		defaultPropertiesArray.forEach(function(property){
			if (component[property.name] == null) {
				webViewerProps[property.name] = defaults[property.name];
			} else {
				webViewerProps[property.name] = component[property.name];
			}

		})

		return (
			<div style = {{padding: "2px",
							display: ((webViewerProps.Visible == "True") ? "block" : "none"),
							textAlign: "center",
							}}>Internet</div>
		);

	}
}