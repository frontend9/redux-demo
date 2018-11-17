export default function createStore(reducer, initState) {
  let state = initState;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }

  function getState() {
    return state;
  }

<<<<<<< HEAD
=======
  function replaceReducer(nextReducer) {
    reducer = nextReducer
    dispatch({ type: Symbol() });
  }

>>>>>>> 11fae6fe28f52461ad849a85fe9abe08e05d1fa5
  dispatch({ type: Symbol() });

  return {
    subscribe,
    dispatch,
<<<<<<< HEAD
    getState
=======
    getState,
    replaceReducer
>>>>>>> 11fae6fe28f52461ad849a85fe9abe08e05d1fa5
  }
}