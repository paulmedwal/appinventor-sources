import selectedComponent from './selectedComponent'


/**
 * Partitions:
 * initial state: nothing, 0, id != 0
 * actions: 
 *		SELECT_COMPONENT
 *		TOGGLE_COMPONENT
 *			component does/does't have subcomponent that is selected
 *		ADD_NEW_COMPONENT
 *			componentType is/isn't Form
 *		SELECT_SCREEN
 *		DELETE_COMPONENT
 *			

 *		default
 */
describe('selectedComponent reducer',() => {
	it('should return the initial state', () => {
		expect(
			selectedComponent("", {})
		).toEqual("")

		expect(
			selectedComponent(undefined, {})
		).toEqual("")
	})

	it('should handle TOGGLE_COMPONENT', () => {
		expect(
			selectedComponent("", {
				type: "TOGGLE_COMPONENT",
				id: "1",
				hasSelectedSubcomp: true
			})
		).toEqual("1")

		expect(
			selectedComponent("0", {
				type:"TOGGLE_COMPONENT",
				id:"4",
				hasSelectedSubcomp: false
			})
		).toEqual("0")
	})

	it('should handle ADD_NEW_COMPONENT', () => {
		expect(
			selectedComponent("0", {
				type: 'ADD_NEW_COMPONENT',
				name: "Form2",
				componentType:"Form",
				Uuid:"2",
				version:"1",
				screenId:"0"
			})
		).toEqual("2")

		expect(
			selectedComponent("1", {
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
			selectedComponent("0", {
				type: 'SELECT_SCREEN',
				id:"1"
			})
		).toEqual("1")
	})

	it('should handle DELETE_COMPONENT', () => {
		expect(
			selectedComponent("1", {
				type: 'DELETE_COMPONENT',
				id:"1",
				selectedScreen: "0"
			})
		).toEqual("0")
	})

		expect(
			selectedComponent("0", {
				type: 'DELETE_COMPONENT',
				id:"1",
				selectedScreen: "1"
			})
		).toEqual("1")
})