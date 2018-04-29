import { Actions } from '../constants';

/**
 * The todos reducer
 * @param {array} state The previews state
 * @param {string} action The action to perform
 */
const todos = (state = [], action) => {
  switch (action.type) {
    case Actions.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case Actions.TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos