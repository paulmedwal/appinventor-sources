import React, { Component } from 'react';
import Dropdown from 'react-dropdown';

/**
 * Screens creates the bar of screen tabs at the top of the page.
 */

const screen_tab_style = {
	border: '1px solid black',
	backgroundColor: 'lightyellow',
	padding: '0.5em',
	float: 'left',
	position: 'relative',
	cursor: 'default'
};



export default class Screens extends Component {

	render () {

		var thisComponent = this;
		var screens = this.props.screens;

		var disableDelete = this.props.selectedScreen === "0";

		const options = [];

		var screenMap = {};
		screens.forEach(function(screen){
			options.push({
				value: screen.Uuid,
				label: screen.name,
			})
			screenMap[screen.Uuid] = screen.name;
		})

		return (
			<div>
				<button onClick={() => this.props.addComponent("Form", "0")}>Add Screen</button>
				<button onClick={() => this.props.removeScreen(thisComponent.props.selectedScreen)} disabled={disableDelete}>Remove Screen</button>
				<br/>
				<Dropdown options={options} onChange={(option)=>{thisComponent.props.chooseScreen(option.value)}} value = {screenMap[this.props.selectedScreen]} placeholder = {screenMap[this.props.selectedScreen]}/>
				{screens.map(({name, Uuid}) => {
					var tabColor = this.props.selectedScreen === Uuid ? 'pink' : 'lightyellow';
					
					return (
					<div key={name + "_" + Uuid} style={{...screen_tab_style, backgroundColor:tabColor}}>
						<a onClick={() => thisComponent.props.chooseScreen(Uuid)}>{name}</a>
						<br/>
					</div>
					)
				})}
			</div>
		);
	}
}