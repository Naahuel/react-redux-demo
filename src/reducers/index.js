import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

/**
 * Combine the main reducers into a root reducer
 */
export default combineReducers({
  todos,
  visibilityFilter
});