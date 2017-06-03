import * as actions from './index'

/*
describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: 'ADD_TODO',
      id: 0,
      text: 'Use Redux'
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: 'TOGGLE_TODO',
      id: 1
    })
  })
})
*/

describe('actions', () => {
  it('addNewComponent should create ADD_NEW_COMPONENT action', () => {
    expect(actions.addNewComponent('componentType', "0")).toEqual({
      type: 'ADD_NEW_COMPONENT',
      name: "componentType2",
      componentType: "componentType",
      Uuid: "2",
      version: "1",
      screenId: "0"
    })
  })

  it('updateComponent should create UPDATE_COMPONENT action', () => {
    expect(actions.updateComponent('0', 'AboutScreen', 'Hello!')).toEqual({
      type: 'UPDATE_COMPONENT',
      id: '0',
      propertyName: 'AboutScreen',
      propertyInputValue: 'Hello!'
    })
  })

  it('selectComponent should create SELECT_COMPONENT action', () => {
    expect(actions.selectComponent("1")).toEqual({
      type: 'SELECT_COMPONENT',
      id: "1"
    })
  })

  it('toggleComponent should create TOGGLE_COMPONENT action', () => {
    expect(actions.toggleComponent("0", true)).toEqual({
      type: 'TOGGLE_COMPONENT',
      id: '0',
      hasSelectedSubcomp: true
    })
  })

  it('selectScreen should create SELECT_SCREEN action', () => {
    expect(actions.selectScreen("1")).toEqual({
      type: 'SELECT_SCREEN',
      id: "1"
    })
  })  

  it('deleteComponent should create DELETE_COMPONENT action', () => {
    expect(actions.deleteComponent("2", "0", false)).toEqual({
      type: 'DELETE_COMPONENT',
      id: "2",
      selectedScreen: "0"
    })
  })

})