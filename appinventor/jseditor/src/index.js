import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

/*
const store = createStore(reducer, {dustbins:[{ accepts: [ItemTypes.GLASS], lastDroppedItem: null },
        { accepts: [ItemTypes.FOOD], lastDroppedItem: null },
        { accepts: [ItemTypes.PAPER, ItemTypes.GLASS], lastDroppedItem: null },
        { accepts: [ItemTypes.PAPER], lastDroppedItem: null }]})
*/


/** store contains:
 * components: contains objects for each component in project - contains only 
 * 			properties that are important or have been changed by user
 * selectedComponent: the component that is currently selected - properties shown in 
 *			Properties panel and component highlighted in Components Panel
 * toggled: object mapping component ID to whether or not it is toggled
 * 			true = subcomponents showing, false = subcomponents hidden
 */
const store = createStore(reducer, {dustbins: [], 
	components: [
		//{"name":"Screen1", "componentType":"Form", "version":"20", "AboutScreen":"This is an App!","AppName":"Hello2","Title":"Screen1", "Uuid":"0","children": ["939054039"]}
		{"name":"Screen1", "componentType":"Form", "version":"20", "AboutScreen":"This is an App!","AppName":"Hello2","Title":"Screen1", "Uuid":"0","children": []}/*,
		{"name":"VerticalArrangement1", "componentType":"VerticalArrangement", "version":"3", "AlignHorizontal":"3", "Uuid":"939054039", "children":["1961822558","-1864349167"]},
		{"componentType":"HorizontalArrangement", "name":"HorizontalArrangement1", "version":"3", "AlignHorizontal":"2", "Uuid":"1961822558", "children":["-496282275","53776343"]},
		{"name":"Button1", "componentType":"Button", "version":"6", "FontSize":"16", "Text":"Text for Button1", "Uuid":"-496282275"},
		{"name":"CheckBox1", "componentType":"CheckBox", "version":"2", "FontTypeface":"2", "Text":"Text for CheckBox1", "Uuid":"53776343"},
		{"name":"PasswordTextBox1", "componentType":"PasswordTextBox", "version":"3", "TextAlignment":"1", "Uuid":"-1864349167"}*/
	], 
	selectedComponent: "0", 
	toggled: {"0": true, "939054039": true, "1961822558": true,"-496282275": true, "53776343": true, "-1864349167":true},
	selectedScreen: "0",
	editorSettings: { "selectedProperty": "null", "imagePickerVisible": false, "selectedImage": "null", "colorPickerVisible": false, "selectedColor": "#FFFFFF", "renameComponentVisible":false},
	uploadedImages: [],
	defaultImages: ["https://i.ytimg.com/vi/OjMiTGrCSaA/hqdefault.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kitten_in_Rizal_Park,_Manila.jpg/230px-Kitten_in_Rizal_Park,_Manila.jpg"],
	defaultColors: ["&HFF0000FF", "&HFF00FF00", "&HFFFF0000", "&HFFFFFFFF"]

})

// originally used for testing editor types - will be useful for related future tests
/*Scomponents:
	[
		{"componentType":"Form","name":"Screen1","id":1000,"AboutScreen":"Hello! This is your first app!","AlignHorizontal":"1","AlignVertical":"1","AppName":"Hello","BackgroundColor":"&HFFFFFFFF","BackgroundImage":"","CloseScreenAnimation":"default","Icon":"","OpenScreenAnimation":"default","ScreenOrientation":"unspecified","Scrollable":"False","ShowStatusBar":"True","Sizing":"Fixed","Title":"","TitleVisible":"True","VersionCode":"1","VersionName":"1.0"}, 
		// {"componentType":"Button","name":"Screen1","id":0,"BackgroundColor":"&H00000000","Enabled":"True","FontBold":"False","FontItalic":"False","FontSize":"14.0","FontTypeface":"0","Image":"","Shape":"0","ShowFeedback":"True","Text":"","TextAlignment":"1","TextColor":"&H00000000","Visible":"True"},
		// {"componentType":"Ev3ColorSensor","name":"Screen1","id":0,"AboveRangeEventEnabled":"False","BelowRangeEventEnabled":"False","BluetoothClient":"","BottomOfRange":"30","ColorChangedEventEnabled":"False","Mode":"reflected","SensorPort":"1","TopOfRange":"60","WithinRangeEventEnabled":"False"},
		// {"componentType":"AccelerometerSensor","name":"Screen1","id":0,"Enabled":"True","MinimumInterval":"400","Sensitivity":"2"},
		// {"componentType":"Ev3GyroSensor","name":"Screen1","id":0,"BluetoothClient":"","Mode":"angle","SensorPort":"1","SensorValueChangedEventEnabled":"False"},
		// {"componentType":"Ev3UltrasonicSensor","name":"Screen1","id":0,"AboveRangeEventEnabled":"False","BelowRangeEventEnabled":"False","BluetoothClient":"","BottomOfRange":"30","SensorPort":"1","TopOfRange":"90","Unit":"cm","WithinRangeEventEnabled":"False"},
		// {"componentType":"TextToSpeech","name":"Screen1","id":0,"Country":"","Language":"","Pitch":"1.0","SpeechRate":"1.0"},
		// {"componentType":"Texting","name":"Screen1","id":0,"GoogleVoiceEnabled":"False","Message":"","PhoneNumber":"","ReceivingEnabled":"2"},
		// {"componentType":"NxtColorSensor","name":"Screen1","id":0,"AboveRangeEventEnabled":"False","BelowRangeEventEnabled":"False","BluetoothClient":"","BottomOfRange":"256","ColorChangedEventEnabled":"False","DetectColor":"True","GenerateColor":"&H00FFFFFF","SensorPort":"3","TopOfRange":"767","WithinRangeEventEnabled":"False"},
		// {"componentType":"Notifier","name":"Screen1","id":0,"BackgroundColor":"&HFF444444","NotifierLength":"1","TextColor":"&HFFFFFFFF"},
		// {"componentType":"LocationSensor","name":"Screen1","id":0,"DistanceInterval":"5","Enabled":"True","TimeInterval":"60000"},
		// {"componentType":"FirebaseDB","name":"Screen1","id":0,"DefaultURL":"","DeveloperBucket":"","FirebaseToken":"","FirebaseURL":"DEFAULT","Persist":"False","ProjectBucket":""}
	]*/


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
