import EditorTypes from '../components/EditorTypes';

// Object where key is name of editor type and value is its React Class

export const PropertyEditorTypes = {
	"textArea": EditorTypes.TextArea,
	"horizontal_alignment": EditorTypes.HorizontalAlignment,
	"vertical_alignment": EditorTypes.VerticalAlignment,
	"string": EditorTypes.StringInput,
	"color": EditorTypes.ColorInput,
	"asset": EditorTypes.Asset,
	"screen_animation": EditorTypes.ScreenAnimation,
	"screen_orientation": EditorTypes.ScreenOrientation,
	"boolean": EditorTypes.BooleanInput,
	"sizing": EditorTypes.Sizing,
	"non_negative_integer": EditorTypes.NonNegativeInteger,
	"accelerometer_sensitivity": EditorTypes.AccelerometerSensitivity,
	"float": EditorTypes.Float,
	"typeface": EditorTypes.Typeface,
	"button_shape": EditorTypes.ButtonShape,
	"textalignment": EditorTypes.TextAlignment,
	"visibility": EditorTypes.Visibility,
	"non_negative_float": EditorTypes.NonNegativeFloat,
	"BluetoothClient": EditorTypes.BluetoothClient,
	"lego_ev3_color_sensor_mode": EditorTypes.LegoEv3ColorSensorMode,
	"lego_ev3_sensor_port": EditorTypes.LegoEv3SensorPort,
	"lego_ev3_gyro_sensor_mode": EditorTypes.LegoEV3GyroSensorMode,
	"lego_ev3_ultrasonic_sensor_mode": EditorTypes.LegoEv3UltrasonicSensorMode,
	"FirbaseURL": EditorTypes.FirbaseURL, //******
	"sensor_dist_interval": EditorTypes.SensorDistInterval,
	"sensor_time_interval": EditorTypes.SensorTimeInterval,
	"toast_length": EditorTypes.ToastLength,
	"lego_nxt_generated_color": EditorTypes.LegoNxtGeneratedColor,
	"lego_nxt_sensor_port": EditorTypes.LegoNxtSensorPort,
	"countries": EditorTypes.Countries,
	"languages": EditorTypes.Languages,
	"text_receiving": EditorTypes.TextReceiving
};