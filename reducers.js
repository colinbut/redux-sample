/*
 * update the state according to those actions
 *
 * - application state stored as a single object
 * - It is okay to store data and UI state together but try to keep them apart if possible
 * - thing state as a database & keep state normalized
 * - reducer is a pure function takes previous state & action > returns next state
 *
 * Keep function pure!
 *
 * never:
 * - mutate its argument
 * - perform side effects (like API calls/ routing transitions)
 * - call non-pure functions (Date.now() or Math.random())
 *
 * In summary:
 * 1. No surprises
 * 2. No side effects
 * 3. No API calls
 * 4. No mutations
 * 5. JUST calculations
 *
 * Reducer composition (splitting reducer function) is fundamental part of building redux apps
 */

import {combineReducers} from 'redux' // utility from redux
import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, visibilityFilters} from './actions'

// ES6 destructuring?
const { SHOW_ALL } = visibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false;
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          // Object.assign is part of ES6
          // {} empty object as first argument to return new object rather than mutating existing one
          return Object.assign({}, todo, {
            completed: !todo.completed;
          });
        }
        return todo;
      });
    default:
      return state;

  }
}


const todoApp = combineReducers({visibilityFilter, todos});

export default todoApp
