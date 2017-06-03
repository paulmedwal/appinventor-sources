import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import { DragSourceTypes } from "../constants/DragSourceTypes";

const target = {
	canDrop(props) {
		return true; 
	},

	hover(props, monitor) {
	},

	drop(props, monitor, component) {
		if (monitor.didDrop()) {
			return;
		}
		console.log(props.item.Uuid, props, component);
		// check if id is already in the list of items, if not, insert, otherwise, move
		return {
			uuid: props.item.Uuid,
			type: props.item.type,
            dropZoneType: props.dropZoneType
		};
	}
}

const dropzone_style_visible = {
    width: '100%',
    height: '20px',
    background: 'blue',
    opacity: '.5'
}

const dropzone_style_not_visible = {
    width: '100%',
    height: '10px',
    opacity: '0',
}

@DropTarget(DragSourceTypes.COMPONENT, target, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver({ shallow: true }),
}))
export default class Dropzone extends Component {
	static propTypes = {
		item: PropTypes.object.isRequired, 
        dropZoneType: PropTypes.string.isRequired 
    }

    render() {
        const {connectDropTarget, isOver} = this.props;

        let style = dropzone_style_not_visible;
        if (isOver) {
            style = dropzone_style_visible
        }

        return connectDropTarget(
            <div style={style}>
            </div>
        );
    }
}