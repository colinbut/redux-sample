/*
 * Store brings actions and reducers together
 *
 * Responsibility:
 *
 * 1. store application state
 * 2. access to state via getState()
 * 3. update state by dispatch(action)
 * 4. un/registers listeners via subscriber(listener)
 *
 * In redux - have single store!
 *
 */

import { createStore } from 'redux';

// import reducers
import { todoApp } from './reducers';

// import the action creators
//import { addTodo, toggleTodo, setVisibilityFilter, visibilityFilters } from './actions';

//create the store
let store = createStore(todoApp);
