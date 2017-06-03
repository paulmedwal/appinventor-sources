import React, { PropTypes, Component } from 'react';
import simple_components from './simple_components';
import ReactModal from 'react-modal';

export default class ImagePicker extends Component {
  render() {
  	// console.log(this.props);
  	var property = this.props.property;
    var component = this.props.component;
    var maximagewidth = 200;
    var defaultimagelocs = this.props.defaultImages;
    var uploadedimagelocs = this.props.uploadedImages;
    var visible = this.props.visibility;
    var selectedImage = this.props.selectedImage;
    let display = "block"
    if (visible) {
    	display = "block";
    } else {
    	display = "none";
    }
    


	// Creates buttons for creating type of each component and adding to store
		return (
			<ReactModal isOpen={visible} shouldCloseOnOverlayClick={visible} onRequestClose={this.props.closeModal}>
			<div style={{width: "600px", 'wordWrap': "break-word", display: display}}>
			<div> Button Display </div>
			<div> <img src = {selectedImage} width = {maximagewidth}/> 
			</div>
			<hr></hr>
			<div>  {defaultimagelocs.map((image, i) => {
					return <img src= {defaultimagelocs[i]} width = {maximagewidth} 
					onClick={() => {this.props.selectImage(component, property, defaultimagelocs[i]);
									this.props.closeModal()}} />
				})} </div>
			<hr></hr>
			<div> {uploadedimagelocs.map((image, i) => {
					return <img src= {uploadedimagelocs[i]} width = {maximagewidth} 
					onClick={() => {this.props.selectImage(component, property, uploadedimagelocs[i]);
									this.props.closeModal()}} />
				})}</div>
			<div> <button onClick={() => this.props.uploadImage()}>Upload Image</button></div>
			</div>
			</ReactModal>
		);
	}
}