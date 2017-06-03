import React, { Component } from 'react';
import ComponentNodeContainer from '../containers/ComponentNodeContainer'
import RenameComponentContainer from '../containers/RenameComponentContainer'

/**
 * ComponentsPanel creates the Components panel with the nested components
 * and their buttons.  The buttons will change the Properties panel 
 * when clicked.
 */

export default class ComponentsPanel extends Component {
	render () {
		var thisComponent = this;

		// creates nested tree of components and their subcomponents
		var nestedTree = this.props.projectTree;

		var name= nestedTree["$Name"];
		var id = nestedTree["Uuid"];
		var subs = nestedTree["$Components"];

		// disables Delete and Rename button for screens
		var disableButton = (this.props.selectedComponent === this.props.selectedScreen);

		return (
			<div>
				<span>
				<button onClick={() => thisComponent.props.renameModal()} disabled={disableButton}>Rename</button>
				<RenameComponentContainer/>
				</span>

				<button onClick={() => thisComponent.props.removeComponent(thisComponent.props.selectedComponent, thisComponent.props.selectedScreen)} disabled={disableButton}>Delete</button>

				<ComponentNodeContainer name={name} id={id} subcomponents={subs}/>
			</div>
		);
	}
}