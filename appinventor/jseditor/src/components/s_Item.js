import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import Tree from './s_Tree';
import { DragSourceTypes } from '../constants/DragSourceTypes';
import Dropzone from './Dropzone';
import { DropZoneTypes } from "../constants/DropZoneTypes";

import ItemButton from './appinventorComponents/s_ItemButton';
import ItemLabel from './appinventorComponents/s_ItemLabel';
import ItemCheckbox from './appinventorComponents/s_ItemCheckbox';
import ItemImage from './appinventorComponents/s_ItemImage';
import ItemPasswordTextBox from './appinventorComponents/s_ItemPasswordTextBox';
import ItemListPicker from './appinventorComponents/s_ItemListPicker';
import ItemListView from './appinventorComponents/s_ItemListView';
import ItemSlider from './appinventorComponents/s_ItemSlider';
import ItemTimePicker from './appinventorComponents/s_ItemTimePicker';
import ItemTextBox from './appinventorComponents/s_ItemTextBox';
import ItemWebViewer from './appinventorComponents/s_ItemWebViewer';
import ItemSpinner from './appinventorComponents/s_ItemSpinner';

const style = {
	padding: '0.5em'
}

const source = {
	beginDrag(props) {
		return {
			id: props.id, 
		}
	}, 

	endDrag(props, monitor, component) {
		if (monitor.getDropResult()) {
			const { uuid, dropZoneType } = monitor.getDropResult();
			const dropTargetUuid = monitor.getDropResult().uuid;
			//TODO (spefley) improve LOL 
			//debugger;
			if (props.id != dropTargetUuid) {
				component.props.move(props.id, dropTargetUuid, dropZoneType);
			}
		}
	}
}

@DragSource(DragSourceTypes.COMPONENT, source, (connect) => ({
	connectDragSource: connect.dragSource(), 
}))
export default class Item extends Component {
	static propTypes = {
		id: PropTypes.any.isRequired,
		parent: PropTypes.any, 
		item: PropTypes.object, 
		move: PropTypes.func, 
		find: PropTypes.func,
        onDrop: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);
		this.state = {isToggleOn: false};
		this.handleClick = this.handleClick.bind(this);
		this.renderItem = this.renderItem.bind(this);
	}


	handleClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

	renderItem(name, backgroundColor, uuid) {

		if (this.props.parent != undefined) {
			//console.log(this.props.parent.componentType);
		}

		var typeToHTML = {
			"Button":ItemButton,
			"Label": ItemLabel,
			"CheckBox": ItemCheckbox,
			"Image": ItemImage,
			"PasswordTextBox": ItemPasswordTextBox,
			"ListPicker": ItemListPicker,
			"ListView": ItemListView,
			"Slider": ItemSlider,
			"TimePicker": ItemTimePicker,
			"TextBox": ItemTextBox,
			"WebViewer": ItemWebViewer,
			"Spinner": ItemSpinner,


			//Arrangements

		}

		var arrangements = new Set(["Form",
                        			"HorizontalArrangement",
			                        "HorizontalScrollArrangement",
			                        "TableArrangement",
			                        "VerticalArrangement",
			                        "VerticalScrollArrangement",])

		var ItemType = typeToHTML[this.props.item.type];
		if (ItemType) {
			return (
				<div onClick={() => this.props.chooseComponent(uuid)} 
								style={{boxShadow: ((this.props.selected) ? "0 0 10px 2px lightblue" : ""),
										padding: "0px",
										//display: "inline-block",
										float: ((this.props.parent.componentType=="HorizontalArrangement") ? "left" : "")
										}}>
					<ItemType
						component={this.props.component} parent={this.props.parent}
					/>
				</div>
				);
		} else if (arrangements.has(this.props.item.type)) {
			return (
				<div onClick={this.handleClick} style={{...style, backgroundColor }}>
						{name}</div>
				);
		} else {
			return (<div style = {{display: "none"}}></div>);
		}
	}

	render() {
		const {connectDragSource, selectedComponent,
			item, item: {Uuid, $Name, $Components}, parent, move, find} = this.props;
		let children = $Components
		if ($Components === undefined) {
			children = []
		}

		let backgroundColor= 'white';
		if (this.state.isToggleOn) {
			backgroundColor = 'lightgreen'
		}


		let contentDropzoneStyle = {};
		if(this.hasContentDropzone(item.type)) {
		  contentDropzoneStyle["display"] = "block";
		  contentDropzoneStyle["paddingTop"] = "5px";
		  contentDropzoneStyle["paddingBottom"] = "5px";
		} else {
		  contentDropzoneStyle["display"] = "none";
		}

		return (
			<div>
				{connectDragSource(
					this.renderItem($Name, backgroundColor, Uuid)
				)}
				<div style={contentDropzoneStyle}>
					<Dropzone
						item={this.props.item}
						dropZoneType={DropZoneTypes.CONTENT}
					/>
					<Tree 
						parent={Uuid}
						items={children}
						move={move}
						find={find}
					/>
				</div>
				<Dropzone
					item={this.props.item}
					dropZoneType={DropZoneTypes.AFTER}
				/>
			</div>
		)
	}

	hasAfterDropzone(type) {
		return type !== "Form";
	}

	hasContentDropzone(type) {
		return type === "HorizontalArrangement" ||
			type === "HorizontalScrollArrangement" ||
			type === "TableArrangement" ||
			type === "VerticalArrangement" ||
			type === "VerticalScrollArrangement" ||
			type === "Form";
		// TODO: jank begets jank
	}
}