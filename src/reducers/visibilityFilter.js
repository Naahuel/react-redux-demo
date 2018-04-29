import { VisibilityFilters, Actions } from '../constants';

/**
 * The todos reducer
 * @param {array} state The previews state
 * @param {string} action The action to perform
 */
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case Actions.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter