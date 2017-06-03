import React, { Component, PropTypes } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';
import ItemTypes from './ItemTypes';

const style = {
  border: '1px dashed gray',
  padding: '0.5rem',
  margin: '0.5rem',
  backgroundColor:'white',
  cursor: 'move'
};

const itemSource = {
  beginDrag(props) {
    return {
    	id: props.id,
    	index: props.index,
    };
  },
};

const itemTarget = {
	hover(props, monitor, component) {
		const dragIndex = monitor.getItem().index;
		const hoverIndex = props.index;

		if (dragIndex === hoverIndex) {
			return;
		}

		const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
		const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top)/2
		const clientOffset = monitor.getClientOffset();
		const hoverClientY = clientOffset.y - hoverBoundingRect.top;

		if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
			return;
		}

		if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
			return;
		}

		props.moveItem(dragIndex, hoverIndex);
		monitor.getItem().index = hoverIndex;
	},
};

@DropTarget('ITEM', itemTarget, connect => ({
	connectDropTarget: connect.dropTarget(), 
}))

@DragSource('ITEM', itemSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
export default class SourceBox extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.any.isRequired,
    text: PropTypes.string.isRequired,
    moveItem: PropTypes.func.isRequired,
    children: PropTypes.node,
  };

  render() {
    const { text, children, isDragging, connectDropTarget, connectDragSource } = this.props;
    const opacity = isDragging ? 0.4 : 1;

     return connectDragSource(connectDropTarget(
     	<div style={{...style, opacity }}>
     		{text}
     		{children}
     	</div>, 
     ));
  }
}





/* import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';

const style = {
  border: '1px dashed gray',
  padding: '0.5rem',
  margin: '0.5rem',
  cursor: 'move'
};

const itemSource = {
  beginDrag() {
    return {};
  },
};

@DragSource(props => props.color, itemSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
export default class SourceBox extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  render() {
    const { color, children, isDragging, connectDragSource } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    let backgroundColor;
    switch (color) {
      case ItemTypes.GREEN:
        backgroundColor = 'lightgreen';
        break;
      case ItemTypes.PURPLE:
        backgroundColor = 'violet';
        break;
      default:
        break;
    }

    return connectDragSource(
      <div style={{ ...style, backgroundColor, opacity }}>
        <small>Drag me</small>
        {children}
      </div>,
    );
  }
} */
