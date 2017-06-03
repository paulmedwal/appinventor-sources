import selectedScreen from './selectedScreen'


/**
 * Partitions:
 * initial state: nothing, 0, id != 0
 * actions: 
 *	 ADD_NEW_COMPONENT
 *			componentType: is Form, not Form
 *	 SELECT_SCREEN
 *	 DELETE_COMPONENT
 *			state ==, != action.id
 *			state == 0, != 0
 *	 default
 * 
 */
describe('selectedScreen reducer',() => {
	it('should return the initial state', () => {
		expect(
			selectedScreen("", {})
		).toEqual("")

		expect(
			selectedScreen(undefined, {})
		).toEqual("")
	})

	it('should handle ADD_NEW_COMPONENT', () => {
		expect(
			selectedScreen("0", {
				type: 'ADD_NEW_COMPONENT',
				name: "Form2",
				componentType:"Form",
				Uuid:"2",
				version:"1",
				screenId:"0"
			})
		).toEqual("2")

		expect(
			selectedScreen("1", {
				type: 'ADD_NEW_COMPONENT',
				name: "Button3",
				componentType:"Button",
				Uuid:"3",
				version:"1",
				screenId:"0"
			})
		).toEqual("1")
	})

	it('should handle SELECT_SCREEN', () => {
		expect(
			selectedScreen("0", {
				type: 'SELECT_SCREEN',
				id:"1"
			})
		).toEqual("1")
	})

	it('should handle DELETE_COMPONENT', () => {
		// Deleting 0 is not allowed by UI
		// so id:"0" when selectedScreen != "0" is not tested
		expect(
			selectedScreen("0", {
				type: 'DELETE_COMPONENT',
				id:"0",
				selectedScreen: "0"
			})
		).toEqual("0")

		expect(
			selectedScreen("0", {
				type: 'DELETE_COMPONENT',
				id:"1",
				selectedScreen: "0"
			})
		).toEqual("0")

		expect(
			selectedScreen("1", {
				type: 'DELETE_COMPONENT',
				id:"1",
				selectedScreen: "1"
			})
		).toEqual("0")


		expect(
			selectedScreen("1", {
				type: 'DELETE_COMPONENT',
				id:"2",
				selectedScreen: "1"
			})
		).toEqual("1")
	})	
})