import React, { Component } from 'react';
import ComponentNodeContainer from '../containers/ComponentNodeContainer'

/**
 * Component Node creates the nodes for the components to be shown in 
 * in the Components panel.  They can be represented as words, buttons, etc.
 * This also recursively includes the subcomponents/children of each component.
 * If the button is clicked, the function is called to change selectedComponent
 * and update the Properties panel to match the clicked component.
 * 
 * If a component is clicked, it becomes selectedComponent.
 * chooseComponent is from ComponentNodeContainer.js
 * If a component is toggled, subcomponents are hidden, and it becomes
 * selectedComponent if the original one was a subcomponent.
 * toggleComp is from ComponentNodeContainer.js
 */


export default class ComponentNode extends Component {
	render() {
		// Set button color - pink if selected, white otherwise
		var buttonColor;
		if (this.props.selectedComponent === this.props.id) buttonColor = 'pink'
		else buttonColor = 'white'

		// If component has subcomponents, let subComps store the subcomponents' HTMLs
		// Recursive - calls ComponentNodeContainer
		var subComps = "";
		if (this.props.subcomponents && this.props.toggled[this.props.id]) {
			subComps = this.props.subcomponents.map(({$Name, Uuid, $Components}) =>
				(<ComponentNodeContainer
					key={$Name + "_" + Uuid + "_" + $Components}
					name={$Name}
					id={Uuid}
					subcomponents={$Components}
					onClickFunction={this.props.onClickFunction}
					selectedComponent={this.props.selectedComponent}
					/>)
			)
		}

		// Returns HTML for ComponentNode
		// includes toggle button, component button, and indented subcomponents
		return (
			<div>
				{this.props.subcomponents ? (
					<button onClick={() => this.props.toggleComp(this.props.id, this.props.hasSubcompSelected)}>
						{this.props.toggled[this.props.id] ? '-' : '+'}
					</button>
					) : ("")}

				<button onClick={() => this.props.chooseComponent(this.props.id)} style={{backgroundColor:buttonColor}}> {this.props.name} </button>

				<div style={{marginLeft:'1.5em'}}>{subComps}</div>
			</div>
		)
	}
}