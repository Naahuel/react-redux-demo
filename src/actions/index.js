import { Actions } from '../constants';

/**
 * Action Creators
 */

 // Add a todo
let nextTodoId = 0
export const addTodo = text => ({
  type: Actions.ADD_TODO,
  id: nextTodoId++,
  text
});

// Set the visibility filters
export const setVisibilityFilter = filter => ({
  type: Actions.SET_VISIBILITY_FILTER,
  filter
});

// Toggle a todo as checked/unchecked
export const toggleTodo = id => ({
  type: Actions.TOGGLE_TODO,
  id
});