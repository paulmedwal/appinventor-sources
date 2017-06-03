import React, { Component } from 'react';
import { convert_scm_to_string } from '../utilFunctions/subcomponentUtils'
// import JSZip from '../createAIA/jszip.js'
// import saveAs from '../createAIA/FileSaver.js'

export default class ExportAIA extends Component {
	render() {
		return (
			<div>
				<button onClick={() => create_zip(this.props.components)}> Export project as file (.aia) to computer</button>	
				
			</div>
		)
	}
}

/** 
 * Creates the .aia file
 * Gets the data and turns it into stringified JSON object
 * Creates the folder and all subfolders (hard-coded)
 * Adds the text files (with content)into the folders.
 * Then generates the zip file itself and allows user to download it.
 * zip file is saved as "Hello.aia".
 */
function create_zip(data) {
	var zip = new window.JSZip();
	// console.log(window)
	var projectPropertiesContent = 'main=appinventor.ai_janicec124.Hello.Screen1\nname=Hello\nassets=../assets\nsource=../src\nbuild=../build\nversioncode=1\nversionname=1.0\nuseslocation=False\naname=Hello\nsizing=Fixed';
	var scmContent = '#|\n$JSON\n' + convert_scm_to_string(data) + '\n|#';
	var bkyContent = '<xml xmlns="http://www.w3.org/1999/xhtml">\n  <block type="component_event" id="1" x="1" y="1">\n    <mutation component_type="Button" instance_name="Button1" event_name="Click"></mutation>\n    <field name="COMPONENT_SELECTOR">Button1</field>\n  </block>\n  <yacodeblocks ya-version="158" language-version="20"></yacodeblocks>\n</xml>';

	var projZip = zip.folder("youngandroidproject");
	projZip.file("project.properties", projectPropertiesContent);
	
	var helloZip = zip.folder("src").folder("appinventor").folder("ai_janicec124").folder("Hello");
	helloZip.file("Screen1.bky", bkyContent);
	helloZip.file("Screen1.scm", scmContent);

	// Generates the zip and allows it to be saved as .aia file
	zip.generateAsync({type:"blob"})
	.then(function (blob) {
	    window.saveAs(blob, "Hello.aia");
	});

}
