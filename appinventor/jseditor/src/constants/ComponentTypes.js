export const ComponentTypes = {
	"SENSORS":
		["AccelerometerSensor","BarcodeScanner","Clock","GyroscopeSensor","LocationSensor","NearField","OrientationSensor","Pedometer","ProximitySensor"],
	"CONNECTIVITY":
		["ActivityStarter","BluetoothClient","BluetoothServer","Web"],
	"ANIMATION":
		["Ball","Canvas","ImageSprite"],
	"USERINTERFACE":
		["Button","CheckBox","DatePicker","Image","Label","ListPicker","ListView","Notifier","PasswordTextBox","Slider","Spinner","TextBox","TimePicker","WebViewer"],
	"MEDIA":
		["Camcorder","Camera","ImagePicker","Player","Sound","SoundRecorder","SpeechRecognizer","TextToSpeech","VideoPlayer","YandexTranslate"],
	"SOCIAL":
		["ContactPicker","EmailPicker","PhoneCall","PhoneNumberPicker","Sharing","Texting","Twitter"],
	"LEGOMINDSTORMS":
		["Ev3ColorSensor","Ev3Commands","Ev3GyroSensor","Ev3Motors","Ev3Sound","Ev3TouchSensor","Ev3UI","Ev3UltrasonicSensor","NxtColorSensor","NxtDirectCommands","NxtDrive","NxtLightSensor","NxtSoundSensor","NxtTouchSensor","NxtUltrasonicSensor"],
	"STORAGE":
		["File","FusiontablesControl","TinyDB","TinyWebDB"],
	"EXPERIMENTAL":
		["FirebaseDB"],
	"LAYOUT":
		["HorizontalArrangement","HorizontalScrollArrangement","TableArrangement","VerticalArrangement","VerticalScrollArrangement"],
	"INTERNAL":
		["GameClient","MediaStore","PhoneStatus","Voting"]
};

export const ComponentCategories = ["USERINTERFACE", "LAYOUT", "SENSORS", "CONNECTIVITY", "ANIMATION", "MEDIA", "SOCIAL", "LEGOMINDSTORMS", "STORAGE", "EXPERIMENTAL", "INTERNAL"]
