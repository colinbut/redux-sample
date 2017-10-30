
import { createStore } from 'redux';

// import reducers
import { todoApp } from './reducers';

// import the action creators
import { addTodo, toggleTodo, setVisibilityFilter, visibilityFilters } from './actions';

//create the store
let store = createStore(todoApp);

// log initial state
console.log(store.getState());

// every time the state changes, log it
// subscribe() returns a function for unregistering the listener - so unsubscribe is the function
let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(visibilityFilters.SHOW_COMPLETED));

// stop listening to store updates
unsubscribe(); //call the function
