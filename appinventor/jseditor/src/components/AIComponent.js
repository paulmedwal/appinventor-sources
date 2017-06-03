
import React, { PropTypes, Component } from 'react';
import { DragSource } from 'react-dnd';
import { DragSourceTypes } from '../constants/DragSourceTypes';
import { addNewComponent } from '../actions/index';

@DragSource(DragSourceTypes.COMPONENT, {beginDrag, endDrag}, collect)
export default class AIComponent extends Component {
	static propTypes = {
        compType: PropTypes.string.isRequired,
        onDrop: PropTypes.func.isRequired,
		connectDragSource: PropTypes.func.isRequired,
	} ;

	render() {
        const {compType, connectDragSource} = this.props;
        return connectDragSource(
            <div key={compType}>
                <button>
                    {compType}
                </button>
                <br/>
            </div>
        );
    }
}

function beginDrag(props, monitor, component) {
	console.log("beginning component drag", props);
	return {
		id: props.id
	};
};

function endDrag(props, monitor, component) {
    if (monitor.getDropResult()) {
        console.log("hi");
        const { uuid, dropZoneType } = monitor.getDropResult();
        const { compType, selectedScreen } = props;
        //TODO (spefley) improve LOL 

        component.props.onDrop(compType, selectedScreen, uuid, dropZoneType);
    }
};

function collect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
	};
};