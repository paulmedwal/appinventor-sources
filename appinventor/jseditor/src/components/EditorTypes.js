import React, { Component } from 'react';
import ColorPickerContainer from '../containers/ColorPickerContainer'

/** 
 * EditorTypes creates the specified editor types that are needed for properties.
 * ex. text area, string, number, boolean, etc.
 * The component created includes the given values for the properties
 * as well as the update function for each specific editor type
 */

let defType = <button type="button">Upload/Color</button>;

// All editor types need this.props
export class PropertyUI extends Component {
}

PropertyUI.propTypes = {
	value: React.PropTypes.string,
	propertyName: React.PropTypes.string,
	componentId: React.PropTypes.string
};

// Different from other inputs - uses checked, not value
export class BooleanInput extends PropertyUI {
	render() {
		return <input type="checkbox" checked={(this.props.value==='True')} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, (event.target.checked ? "True" : "False") )}/>;
	}
}
// Different from other inputs - uses checked, not value
export class Visibility extends PropertyUI {
	render() {
		return <input type="checkbox" checked={(this.props.value === 'True')} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, (event.target.checked ? "True" : "False") )}/>;
	}
}
export class TextArea extends PropertyUI {
  render() {
    return <textarea value={this.props.value} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, event.target.value)} />;}
}
export class HorizontalAlignment extends PropertyUI {
	render() {
		return (
			<select value={this.props.value} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, event.target.value)}>
				<option value="1">Left: 1</option>
				<option value="3">Center: 3</option>
				<option value="2">Right: 2</option>
			</select>
		);
	}
}
export class VerticalAlignment extends PropertyUI {
	render() {
		return (
			<select value={this.props.value} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, event.target.value)}>
				<option value="1">Top: 1</option>
				<option value="2">Center: 2</option>
				<option value="3">Bottom: 3</option>
			</select>
		);
	}
}
export class StringInput extends PropertyUI {
	render() {
		return <input type="text" value={this.props.value} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, event.target.value)} />;
	}
}
export class ColorInput extends PropertyUI {
	render() {
		return (
			<div>
			<div style={{backgroundColor: '#' + this.props.value.substr(this.props.value.length - 6), width: "30px", height: "30px"}}></div>
			<button onClick={()=>this.props.selectFunction(this.props.componentId, this.props.propertyName, "color")}>Choose Color</button>
			<ColorPickerContainer/>
			</div>
			);
	}
}
export class Asset extends PropertyUI {
	render() {
		return (
			<div>
			<div><img src = {this.props.value} width = "50"></img></div>
			<button onClick={()=>this.props.selectFunction(this.props.componentId, this.props.propertyName, "asset")}>Upload Image</button>
			</div>
			)
	}
}
// Used only by Form - Close/OpenScreenAnimation
export class ScreenAnimation extends PropertyUI {
	render() {
		return (
			<select value={this.props.value} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, event.target.value)}>
				<option value="default">Default</option>
				<option value="fade">Fade</option>
				<option value="zoom">Zoom</option>
				<option value="slide_horizontal">SlideHorizontal</option>
				<option value="slide_vertical">SlideVertical</option>
				<option value="none">None</option>
			</select>
		);
	}
}
// Used only by Form - ScreenOrientation
export class ScreenOrientation extends PropertyUI {
	render() {
		return (
			<select value={this.props.value} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, event.target.value)}>
				<option value="unspecified">Unspecified</option>
				<option value="portrait">Portrait</option>
				<option value="landscape">Landscape</option>
				<option value="sensor">Sensor</option>
				<option value="user">User</option>
			</select>
		);
	}
}
// Used only by Form - Sizing
export class Sizing extends PropertyUI {
	render() {
		return (
			<select value={this.props.value} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, event.target.value)}>
				<option value="Fixed">Fixed</option>
				<option value="Responsive">Responsive</option>
			</select>
		);
	}
}
export class NonNegativeInteger extends PropertyUI {
	render() {
		return <input type="number" min="0" step="1" value={this.props.value} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, event.target.value)}d/>;
	}
}
// Used only by AccelerometerSensor - Sensitivity
export class AccelerometerSensitivity extends PropertyUI {
	render() {
		return (
			<select value={this.props.value} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, event.target.value)}d>
				<option value="1">weak</option>
				<option value="2">moderate</option>
				<option value="3">strong</option>
			</select>
		);
	}
}
export class Float extends PropertyUI {
	render() {
		return <input type="number" step="0.01" value={this.props.value} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, event.target.value)}/>;
	}
}
export class Typeface extends PropertyUI {
	render() {
		return (
			<select value={this.props.value} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, event.target.value)}>
				<option value="0">{"default"}</option>
				<option value="1">san serif</option>
				<option value="2">serif</option>
				<option value="3">monospace</option>
			</select>
		);
	}
}
export class ButtonShape extends PropertyUI {
	render() {
		return (
			<select value={this.props.value} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, event.target.value)}>
				<option value="0">{"default"}</option>
				<option value="1">rounded</option>
				<option value="2">rectangular</option>
				<option value="3">oval</option>
			</select>
		);
	}
}
export class TextAlignment extends PropertyUI {
	render() {
		return (
			<select value={this.props.value}  onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, event.target.value)}>
				<option value="0">left: 0</option>
				<option value="1">center: 1</option>
				<option value="2">right: 2</option>
			</select>
		);
	}
}
export class NonNegativeFloat extends PropertyUI {
	render() {
		return <input type="number" min="0" step="0.01" value={this.props.value} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, event.target.value)}/>
	}
}
export class BluetoothClient extends Component {
	render() {
		return defType;
	}
}
// Used only by Ev3ColorSensor - Mode
export class LegoEv3ColorSensorMode extends PropertyUI {
	render() {
		return (
			<select value={this.props.value} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, event.target.value)}>
				<option value="reflected">reflected</option>
				<option value="ambient">ambient</option>
				<option value="color">color</option>
			</select>
		);
	}
}
// Used by: Ev3ColorSensor, Ev3GyroSensor, Ev3TouchSensor, Ev3UltrasonicSensor
export class LegoEv3SensorPort extends PropertyUI {
	render() {
		return (
			<select value={this.props.value} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, event.target.value)}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
			</select>
		);
	}
}
// Used only by Ev3GyroSensor - Mode
export class LegoEV3GyroSensorMode extends PropertyUI {
	render() {
		return (
			<select value={this.props.value} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, event.target.value)}>
				<option value="angle">angle</option>
				<option value="rate">rate</option>
			</select>
		);
	}
}
// Used only by Ev3UltrasonicSensor - Unit
export class LegoEv3UltrasonicSensorMode extends PropertyUI {
	render() {
		return (
			<select value={this.props.value} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, event.target.value)}>
				<option value="cm">cm</option>
				<option value="inch">inch</option>
			</select>
		);
	}
}
// Used only by FirebaseDB - FirebaseURL
// Has two inputs - text input and a checkbox
export class FirbaseURL extends PropertyUI {
	render() {
		return (
			<span>
				<input type="text" value={this.props.value} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, event.target.value)}/>
				<input type="checkbox" value={this.props.value}/>
			</span>
		);
	}
}
// Used only by LocationSensor - DistanceInterval
export class SensorDistInterval extends PropertyUI {
	render() {
		return (
			<select value={this.props.value} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, event.target.value)}>
				<option value="5">0</option>
				<option value="6">1</option>
				<option value="10">10</option>
				<option value="100">100</option>
			</select>
		);
	}
}
// Used only by LocationSensor - TimeInterval
export class SensorTimeInterval extends PropertyUI {
	render() {
		return (
			<select value={this.props.value} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, event.target.value)}>
				<option value="0">0</option>
				<option value="1000">1000</option>
				<option value="10000">10000</option>
				<option value="60000">60000</option>
				<option value="300000">300000</option>
			</select>
		);
	}
}
// Used only by Notifier - NotifierLength
export class ToastLength extends PropertyUI {
	render() {
		return (
			<select value={this.props.value} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, event.target.value)}>
				<option value="0">Short</option>
				<option value="1">Long</option>
			</select>
		);
	}
}
// Used only by NxtColorSensor - GenerateColor
export class LegoNxtGeneratedColor extends Component {
	render() {
		return defType;
	}
}
// Used only by NxtColorSensor - SensorPort
export class LegoNxtSensorPort extends PropertyUI {
	render() {
		return (
			<select value={this.props.value} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, event.target.value)}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
			</select>
		);
	}
}
// Used only by TextToSpeech - Country
export class Countries extends PropertyUI {
	render() {
		const allCountries = [
			{name: "Default", val: "Default"}, 
			{name: "AUS", val: "AUS"}, 
			{name: "AUT", val: "AUT"}, 
			{name: "BEL", val: "BEL"}, 
			{name: "BLZ", val: "BLZ"}, 
			{name: "BWA", val: "BWA"}, 
			{name: "CAN", val: "CAN"}, 
			{name: "DEU", val: "DEU"}, 
			{name: "ESP", val: "ESP"}, 
			{name: "FRA", val: "FRA"}, 
			{name: "GBR", val: "GBR"}, 
			{name: "HKG", val: "HKG"}, 
			{name: "IND", val: "IND"}, 
			{name: "IRL", val: "IRL"}, 
			{name: "ITA", val: "ITA"}, 
			{name: "JAM", val: "JAM"}, 
			{name: "LIE", val: "LIE"}, 
			{name: "LUX", val: "LUX"}, 
			{name: "MCO", val: "MCO"}, 
			{name: "MHL", val: "MHL"}, 
			{name: "MLT", val: "MLT"}, 
			{name: "NAM", val: "NAM"}, 
			{name: "NZL", val: "NZL"}, 
			{name: "PAK", val: "PAK"}, 
			{name: "PHL", val: "PHL"}, 
			{name: "SGP", val: "SGP"}, 
			{name: "TTO", val: "TTO"}, 
			{name: "USA", val: "USA"}, 
			{name: "VIR", val: "VIR"}, 
			{name: "ZAP", val: "ZAP"}, 
			{name: "ZWE", val: "ZWE"}
		];
		return (
			<select value={this.props.value} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, event.target.value)}>
				{allCountries.map(({name, val}) => 
					<option value={val}>{name}</option>
				)}
			</select>
		);
	}
}
// Used only by TextToSpeech - Language
export class Languages extends PropertyUI {
	render() {
		const allLanguages = [
			{name: "Default", val: "Default"},
			{name: "de", val: "de"},
			{name: "en", val: "en"},
			{name: "es", val: "es"},
			{name: "fr", val: "fr"},
			{name: "it", val: "it"}
		]
		return (
			<select value={this.props.value} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, event.target.value)}>
				{allLanguages.map(({name, val}) => 
					<option value={val}>{name}</option>
				)}
			</select>
		);
	}
}
// Used only by Texting - ReceivingEnabled
export class TextReceiving extends PropertyUI {
	render() {
		return (
			<select value={this.props.value} onChange={(event)=>this.props.onChangeFunction(this.props.componentId, this.props.propertyName, event.target.value)}>
				<option value="1">Off</option>
				<option value="2">Foreground</option>
				<option value="3">Always</option>
			</select>
		);
	}
}

// exports set of editor types
let EditorTypes = {TextArea, HorizontalAlignment, VerticalAlignment, StringInput, ColorInput, Asset, ScreenAnimation, ScreenOrientation, BooleanInput, Sizing, NonNegativeInteger, AccelerometerSensitivity, Float, Typeface, ButtonShape, TextAlignment, Visibility, NonNegativeFloat, BluetoothClient, LegoEv3ColorSensorMode, LegoEv3SensorPort, LegoEV3GyroSensorMode, LegoEv3UltrasonicSensorMode, FirbaseURL, SensorDistInterval, SensorTimeInterval, ToastLength, LegoNxtGeneratedColor, LegoNxtSensorPort, Countries, Languages, TextReceiving
};
export default EditorTypes;
