import React, { PropTypes, Component } from 'react';
import simple_components from '../simple_components';

export default class ItemImage extends Component {
	render() {

		var component = this.props.component;
		console.log(this.props.parent);
		var defaultPropertiesArray = simple_components.simpleComponents.filter(function(component) {
			return component.name == "Image";
		})[0].properties;

		var defaults = {};
		defaultPropertiesArray.forEach(function(property){
			defaults[property.name] = property.defaultValue;
		})

		var imageProps = {};
		defaultPropertiesArray.forEach(function(property){
			if (component[property.name] == null) {
				imageProps[property.name] = defaults[property.name];
			} else {
				imageProps[property.name] = component[property.name];
			}
		})


		var rotationdegrees = imageProps.RotationAngle + "deg";

		//Rotation and Fit to screen are not in current AppInventor :|
		return (
			<div style = {{visibility: ((imageProps.Visible == "True") ? "visible" : "hidden"),
						   transform: [{rotate: rotationdegrees}],
							}}><img src = {imageProps.Picture} /></div>
		);

	}
}