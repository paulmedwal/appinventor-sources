import components from './components'


/**
 * Partitions:
 * initial state: empty, non-empty dictionary
 * actions: 
 *  ADD_NEW_COMPONENT
 *      store empty, nonempty
 *      screenId = null (only null if component type is form), not null
 *      
 *  UPDATE_COMPONENT
 *      property already exists, not stored yet
 *  DELETE_COMPONENT
 *  default
 * 
 */
const screen1 = {
    name:"Screen1", 
    componentType:"Form", 
    version:"20", 
    AboutScreen:"This is an App!",
    AppName:"Hello2",
    Title:"Screen1", 
    Uuid:"0"}

const screen2 = {
    name:"Screen2",
    componentType: "Form",
    version:"20", 
    Uuid:"1"
}

const button1 = {
    name:"Button1",
    componentType:"Button",
    Uuid:"2",
    version:"1"
}

const store1 = [
        {"name":"Screen1", "componentType":"Form", "version":"20", "AboutScreen":"This is an App!","AppName":"Hello2","Title":"Screen1", "Uuid":"0","children": ["939054039"]},
        {"name":"VerticalArrangement1", "componentType":"VerticalArrangement", "version":"3", "AlignHorizontal":"3", "Uuid":"939054039", "children":["1961822558","-1864349167"]},
        {"componentType":"HorizontalArrangement", "name":"HorizontalArrangement1", "version":"3", "AlignHorizontal":"2", "Uuid":"1961822558", "children":["-496282275","53776343"]},
        {"name":"Button1", "componentType":"Button", "version":"6", "FontSize":"16", "Text":"Text for Button1", "Uuid":"-496282275"},
        {"name":"CheckBox1", "componentType":"CheckBox", "version":"2", "FontTypeface":"2", "Text":"Text for CheckBox1", "Uuid":"53776343"},
        {"name":"PasswordTextBox1", "componentType":"PasswordTextBox", "version":"3", "TextAlignment":"1", "Uuid":"-1864349167"}
    ];

const deletePassword = [
        {"name":"Screen1", "componentType":"Form", "version":"20", "AboutScreen":"This is an App!","AppName":"Hello2","Title":"Screen1", "Uuid":"0","children": ["939054039"]},
        {"name":"VerticalArrangement1", "componentType":"VerticalArrangement", "version":"3", "AlignHorizontal":"3", "Uuid":"939054039", "children":["1961822558"]},
        {"componentType":"HorizontalArrangement", "name":"HorizontalArrangement1", "version":"3", "AlignHorizontal":"2", "Uuid":"1961822558", "children":["-496282275","53776343"]},
        {"name":"Button1", "componentType":"Button", "version":"6", "FontSize":"16", "Text":"Text for Button1", "Uuid":"-496282275"},
        {"name":"CheckBox1", "componentType":"CheckBox", "version":"2", "FontTypeface":"2", "Text":"Text for CheckBox1", "Uuid":"53776343"}
    ];

const deleteVert = [
        {"name":"Screen1", "componentType":"Form", "version":"20", "AboutScreen":"This is an App!","AppName":"Hello2","Title":"Screen1", "Uuid":"0","children": []}
    ];

describe('components reducer',() => {
    it('should return the initial state', () => {
        expect(
            components(undefined, {})
        ).toEqual([])

        expect(
            components([], {})
        ).toEqual([])

        expect(
            components([screen1], {})
            ).toEqual([screen1])
    })

    it('should handle ADD_NEW_COMPONENT', () => {
        // add a screen to store with existing screen (screenId is null)
        expect(
            components([screen1], {
                type: 'ADD_NEW_COMPONENT',
                name:"Screen2",
                componentType:"Form",
                Uuid:"2",
                version:"1",
                screenId: null
            })
        ).toEqual([screen1, {
            name:"Screen2", 
            componentType:"Form", 
            version:"1", 
            Uuid:"2"}])

        expect(
            components([screen1, screen2], {
                type: 'ADD_NEW_COMPONENT',
                name:"Button1",
                componentType:"Button",
                Uuid:"2",
                version:"1",
                screenId: "0"
            })
        ).toEqual([
            {...screen1, children:["2"]},
            screen2,
            {
                name:"Button1",
                componentType:"Button",
                Uuid:"2",
                version:"1"
            }
        ])
    })
    
    it('should handle UPDATE_COMPONENT', () => {
        expect(
            components([{...screen1, children:["2"]}, screen2, button1], {
                type: 'UPDATE_COMPONENT',
                id: "2",
                propertyName: "FontSize",
                propertyInputValue: "20.0",
            })
        ).toEqual([
            {...screen1, children:["2"]}, screen2, {...button1, FontSize:"20.0"}
        ])

        expect(
            components([
                {...screen1, children:["2"]}, screen2, {...button1, FontSize:"14.0"}], {
                    type: 'UPDATE_COMPONENT',
                    id: "2",
                    propertyName: "FontSize",
                    propertyInputValue: "20.0",
            })
        ).toEqual([
            {...screen1, children:["2"]}, screen2, {...button1, FontSize:"20.0"}
        ])

    })

    it('should handle DELETE_COMPONENT', () => {
        // remove single component
        expect(
            components(store1, {
                type: 'DELETE_COMPONENT',
                id:"-1864349167",
                selectedScreen: "1"
            })).toEqual(deletePassword)

        // remove component with children
        expect(
            components(store1, {
                type: 'DELETE_COMPONENT',
                id:"939054039",
                selectedScreen: "1"
            })).toEqual(deleteVert)
    })

})