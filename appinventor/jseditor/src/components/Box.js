import React, { PropTypes, Component } from 'react';
import { DragSource } from 'react-dnd';

const box_style = {
  border: '1px dashed gray',
  //backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
  color: 'black'
};

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name,
      type: props.type,
      id: props.id
    };
  },
  /*
  endDrag(props, monitor, component) {
    /*if (!monitor.didDrop()) {
      console.log('it didnt drop');
    } else {
      console.log('did drop');
    }
    if (component !== null ) {
      component.setState(false)
    } 
  }*/
};


@DragSource(props => props.type, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
  //didDrop: monitor.didDrop()
}))
export default class Box extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    //didDrop: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    const { name, isDragging, connectDragSource } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    let backgroundColor = 'white';
    if (this.state.isToggleOn) {
      backgroundColor = 'lightgreen'
    }

    return connectDragSource(
      <div onClick={this.handleClick} style={{ ...box_style, opacity, backgroundColor }}>
        {name}
      </div>
    );
  }
}