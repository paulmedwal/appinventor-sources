import React, { Component } from 'react';
import simple_components from './simple_components';

export default class Rename extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	value: this.props.selectedComponentName,
	    isValidName: true
	  };
	  this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		var newName = event.target.value;
		this.setState({ value: newName });
		// console.log("1" + event.target.value)
		if ((this.props.existingNames.indexOf(newName) != -1 && this.props.selectedComponentName != newName) ||
			this.props.componentTypes.indexOf(newName) != -1 ||
			newName == "") {
			// console.log("2" +false)
			this.setState({
				value: newName,
				isValidName: false
			});
		} else {
			// console.log(true)
			this.props.updateComponentProperty(this.props.selectedComponentId, event.target.value);
			this.setState({
				isValidName: true
			});
		}
	}

	render() {
		// var thisComponent = this;
		var componentName = this.props.selectedComponentName;
		// console.log(componentName)
		var componentId = this.props.selectedComponentUuid;
		var textboxColor = this.state.isValidName ? "white" : "red";
		return (
			<input type="text" 
			style={{backgroundColor:textboxColor}} 
			value={componentName}
			onChange={this.handleChange} />
		);
	}
}