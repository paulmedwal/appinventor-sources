import React, { PropTypes, Component } from 'react';
import ReactModal from 'react-modal';

/**
* creates the modal for renaming a component
* works with the Rename button in the components panel.
*/

export default class RenameComponent extends Component {

 constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onComponentNameChange(event.target.value);
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.input.value);
    this.props.renameComponent(this.props.componentId, this.input.value);
    event.preventDefault();
    this.props.closeModal();
  }

  render() {
    const componentName = this.props.componentName;
    var prevName = this.props.componentName;
    var componentId = this.props.componentId;
    var visible = this.props.visibility;
    let display = "block"
    if (visible) {
    	display = "block";
    } else {
    	display = "none";
    }


	// Creates buttons for creating type of each component and adding to store
		return (
      <ReactModal isOpen={visible} shouldCloseOnOverlayClick={false} onRequestClose={this.props.closeModal} className="ReactModal_RenameComponent" >
      <div style={{padding:'10px', fontSize:'20px'}}>Rename Component</div>
			<div style={{'wordWrap': "break-word", display: display}}>
        Old Name: <input type="text" name="prevName" value={prevName} disabled/>

        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            New Name:
            <input type="text" ref={(input) => this.input = input} defaultValue = {prevName} onFocus={(event) => event.target.select()} onChange={this.handleChange} />
          </label>
          <br/>
          <button onClick = {() => {this.props.closeModal()}}>Cancel</button>
          <input type="submit" value="OK" />
        </form>

      </div>
      </ReactModal>
		);
	}
}