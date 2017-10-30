/*
 * Action describe something happened
 */

// action types
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// other constants
export const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}


// actions are just plain javascript objects
// they must have a property of 'type' but the rest is up to you
// it is best practice to pass as little as data as possible (rather than an object)

/*
{
  type: ADD_TODO,
  text: 'Building my first Redux app'
}

{
  type: TOGGLE_TODO,
  index: 5
}

{
  type: SET_VISIBILITY_FILTER,
  filter: SHOW_COMPLETED
}*/

// action creators are functions that create actions
// in redux they simply return an action making them portable and easy for testing
export function addTodo(text) {
  return {type: ADD_TODO, text}
}

export function toggleTodo(index) {
  return {type: TOGGLE_TODO, index}
}

export function setVisibilityFilter(filter) {
  return {type: SET_VISIBILITY_FILTER, filter}
}
