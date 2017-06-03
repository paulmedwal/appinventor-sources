import { combineReducers } from 'redux'
import dustbins from './dustbins'
import components from './components'
import selectedComponent from './selectedComponent'
import toggled from './toggled'
import selectedScreen from './selectedScreen'
import uploadedImages from './uploadedImages'
import defaultImages from './defaultImages'
import editorSettings from './editorSettings'
import defaultColors from './defaultColors'

/** 
 * index.js is REDUCER combining all sub-reducers for different parts of the store
 */

const todoApp = combineReducers({
  dustbins,
  components,
  selectedComponent,
  toggled,
  selectedScreen,
  defaultImages,
  uploadedImages,
  editorSettings,
  defaultColors,
})

export default todoApp
