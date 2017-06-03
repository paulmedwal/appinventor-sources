import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import Box from './Box';

const style = {
  height: '15rem',
  width: '15rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left'
};

const dustbinTarget = {
  drop(props, monitor) {
    props.onDrop(monitor.getItem());
  }
};

@DropTarget([ItemTypes.BUTTON, ItemTypes.LABEL, ItemTypes.TABLE], dustbinTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
}))
export default class Dustbin extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    //canDrop: PropTypes.bool.isRequired,
    //accepts: PropTypes.arrayOf(PropTypes.string),
    //lastDroppedItem: PropTypes.object,
    onDrop: PropTypes.func.isRequired,

    droppedItems: PropTypes.arrayOf(PropTypes.object)
  };

  render() {
    const { isOver, connectDropTarget, droppedItems } = this.props;

    let backgroundColor = '#222';
    if (isOver) {
      backgroundColor = 'darkgreen';
    }

    return connectDropTarget(
      <div style={{ ...style, backgroundColor }}>
        Release to Drop

        {droppedItems &&
          <p>Dropped Items: {JSON.stringify(droppedItems)}</p>
        }

        {droppedItems.map((item, index) =>
            <Box name={item.name}
                 type={item.type}
                 key={index} />
        )}
        
      </div>
    );
  }
}