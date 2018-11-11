import { createStore, combineReducers, replaceReducer } from './redux';

import counterReducer from './reducers/counter';
import infoReducer from './reducers/info';

const reducer = combineReducers({
  counter: counterReducer
});
const store = createStore(reducer);

/*replaceReducer*/
const nextReducer = combineReducers({
  counter: counterReducer,
  info: infoReducer
});

store.replaceReducer(nextReducer);

store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter.count, state.info.name, state.info.description);
});

/*自增*/
store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'SET_NAME',
  name: '前端九部2号'
});