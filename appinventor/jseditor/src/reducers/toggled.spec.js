import toggled from './toggled'


/**
 * Partitions:
 * initial state: empty, non-empty dictionary
 * actions: 
 *  TOGGLE_COMPONENT
 *      component was originally true, false
 *      component is in toggled, is not in toggled -  not actually partitioned
 *  ADD_NEW_COMPONENT
 *  DELETE_COMPONENT
 *      component in toggled, not in toggled
 *  default
 * 
 */
describe('toggled reducer',() => {
    it('should return the initial state', () => {
        expect(
            toggled({}, {})
        ).toEqual({})
    })

    it('should handle TOGGLE_COMPONENT', () => {
        // component originally toggled true
        expect(
            toggled({"0": true, "1":true}, {
                type: 'TOGGLE_COMPONENT',
                id:"1",
                hasSelectedSubcomp: true
            })
        ).toEqual({"0":true, "1": false})
        // component originally toggled false
        expect(
            toggled({"0":true, "1":false}, {
                type: 'TOGGLE_COMPONENT',
                id:"1",
                hasSelectedSubcomp: false
            })
        ).toEqual({"0":true, "1":true})
    })

    it('should handle ADD_NEW_COMPONENT', () => {
        expect(
            toggled({"0":true}, {
                type: 'TOGGLE_COMPONENT',
                id:"2"
            })
        ).toEqual({"0":true, "2": true})
    })

    it('should handle DELETE_COMPONENT', () => {
        expect(
            toggled({"0":true, "1":false}, {
                type:'DELETE_COMPONENT',
                id: "1",
                selectedScreen: "0"
            })
        ).toEqual({"0":true})

        expect(
            toggled({"0":true, "1":false}, {
                type:'DELETE_COMPONENT',
                id:"2",
                selectedScreen:"0"
            })
        ).toEqual({"0":true, "1":false})
    })


})