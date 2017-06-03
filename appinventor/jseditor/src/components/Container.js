import React, { Component, PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Dustbin from './Dustbin';
import Box from './Box';
import ItemTypes from './ItemTypes';

import SourceBox from './ns_SourceBox';
import Tree from './s_Tree';
import { create_tree } from '../utilFunctions/subcomponentUtils'
import { moveComponent } from '../actions'

const style = {
  width: 400,
};

export default class Container extends Component {
  render() {

    console.log(this.props.components);

    var visibleTypes = new Set(["Button",
                        "Label",
                        "CheckBox",
                        "Image",
                        "PasswordTextBox",
                        "ListPicker",
                        "ListView",
                        "Slider",
                        "TimePicker",
                        "TextBox",
                        "WebViewer",
                        "Spinner",
                        "Form",
                        "HorizontalArrangement",
                        "HorizontalScrollArrangement",
                        "TableArrangement",
                        "VerticalArrangement",
                        "VerticalScrollArrangement",
    ]);

    var nonVisibleComponents = [];

    this.props.components.forEach(function(component){
      if (! visibleTypes.has(component.componentType)){
        nonVisibleComponents.push(component);
      } 
    });

    const nestedTree = create_tree(this.props.components, this.props.selectedScreen);
    const dustbins = this.props.dustbins;
    const boxes = [
        { name: 'Button', type: ItemTypes.BUTTON, id: true },
        { name: 'Label', type: ItemTypes.LABEL, id: true },
        { name: 'Table', type: ItemTypes.TABLE, id: true }
      ];
    return (
      <div>
        <div>
          <Tree 
            parent={null}
            items={[nestedTree]}
            move={this.moveItem}
            find={this.findItem}
            onDrop={this.onDrop}
          />
        </div>
        Non-visible Components:
        <div> {nonVisibleComponents.map((component, i) => {
          return <div>{nonVisibleComponents[i].name}</div>
        })}
        </div>
      </div>
    );
  }

  onDrop = (id, afterId) => {
    this.props.onDrop(id, afterId);
  }

  moveItem = (id, afterId, nodeId) => {
    this.props.moveComp(id, afterId, nodeId);
  }

  findItem = (id, items) => {

    for (const node of items) {
      if (node.id === id) {
        return node
      }

      if (node.$Components && node.$Components.length) {
        const result = this.findItem(id, node.$Components)
        if (result) {
          return result
        }
      }
    }

    return false
  }
}