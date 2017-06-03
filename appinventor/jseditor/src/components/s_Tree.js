import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import ItemContainer from '../containers/ItemContainer';

export default class Tree extends Component {
	static propTypes = {
		items: PropTypes.array.isRequired,
		parent: PropTypes.any,
		move: PropTypes.func.isRequired, 
		find: PropTypes.func.isRequired,
		onDrop: PropTypes.func.isRequired
	};

	render() {
		const {items, parent, move, find, onDrop} = this.props 
		return (
			<div style={{
				border: '1px dotted black', 
				padding: '0.5rem 0.5rem 0 0.5rem',
				margin: '0 0.5rem',
				cursor: 'move', 
			}}>
				{items.map((item, i) => {
					return <ItemContainer 
						key={item.Uuid}
						id={item.Uuid}
						parent={parent}
						item={item}
						move={move}
						find={find}
						onDrop={onDrop}
					/>
				})}
			</div>
		)
	}
}