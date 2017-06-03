import React, { PropTypes, Component } from 'react';
import simple_components from './simple_components';
import ReactModal from 'react-modal';

export default class ColorPicker extends Component {


  render() {
  	var defaultColors = this.props.defaultColors;
  	var selectedColor = this.props.selectedColor;
    var property = this.props.property;
    var component = this.props.component;
    var visible = this.props.visibility;
    let display = "block"
    if (visible) {
    	display = "block";
    } else {
    	display = "none";
    }
    


	// Creates buttons for creating type of each component and adding to store
		return (
      <ReactModal isOpen={visible} shouldCloseOnOverlayClick={visible} onRequestClose={this.props.closeModal} className="ReactModal_ColorPicker" >
      <div>Color Picker</div>
			<div style={{'wordWrap': "break-word", display: display}}>
			<div>  {defaultColors.map((color, i) => {
					return <span style={{fontSize: "30px", paddingLeft: "30px", backgroundColor: '#' + defaultColors[i].substr(defaultColors[i].length-6), borderStyle: "solid", borderWidth: "1px"}}
          onClick={()=> {this.props.selectColor(component, property, defaultColors[i]);
                         this.props.closeModal()}}>&nbsp;</span>
				})} </div>
			</div>
      </ReactModal>
		);
	}
}