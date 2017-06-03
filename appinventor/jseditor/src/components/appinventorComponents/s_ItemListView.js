import React, { PropTypes, Component } from 'react';
import simple_components from '../simple_components';

export default class ItemListView extends Component {
	render() {

		var component = this.props.component;
		var defaultPropertiesArray = simple_components.simpleComponents.filter(function(component) {
			return component.name == "ListView";
		})[0].properties;

		var defaults = {};
		defaultPropertiesArray.forEach(function(property){
			defaults[property.name] = property.defaultValue;
		})


		var listViewProps = {};
		defaultPropertiesArray.forEach(function(property){
			if (component[property.name] == null) {
				listViewProps[property.name] = defaults[property.name];
			} else {
				listViewProps[property.name] = component[property.name];
			}

		})



		if (listViewProps["ShowFilterBar"] == "True") {
			return (
			<div style={{backgroundColor: '#' + listViewProps.BackgroundColor.substr(listViewProps.BackgroundColor.length-6),
							flex: '1',
							height: '60px',
							padding: '5px',
							display: ((listViewProps.Visible == "True") ? "block" : "none"),
						    }}><div style ={{backgroundColor: '#FFFFFF', 
						    				padding: '10px', 
						    				fontSize: '10px',
						    				color: '#333333',
						    				borderRadius: '2px'}}>Search list...</div></div>
			);
		}

		return (
			<div style={{backgroundColor: '#' + listViewProps.BackgroundColor.substr(listViewProps.BackgroundColor.length-6),
							flex: '1',
							height: '30px',
							padding: '5px',
							display: ((listViewProps.Visible == "True") ? "block" : "none"),
						    }}></div>
		);

	}
}