export default function createStore(reducer, initState, rewriteCreateStoreFunc) {

  if (typeof initState === 'function' && typeof rewriteCreateStoreFunc === 'undefined') {
    rewriteCreateStoreFunc = initState;
    initState = undefined;
  }

  if (rewriteCreateStoreFunc) {
    const newCreateStore = rewriteCreateStoreFunc(createStore);
    return newCreateStore(reducer, initState);
  }

  let state = initState;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
    return function unsubscribe() {
      const index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
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

  function replaceReducer(nextReducer) {
    reducer = nextReducer
    dispatch({ type: Symbol() });
  }

  dispatch({ type: Symbol() });

  return {
    subscribe,
    dispatch,
    getState,
    replaceReducer
  }
}