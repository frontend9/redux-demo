import { createStore, combineReducers } from './redux';
import counterReducer from './reducers/counter';

import loggerMiddleware from './middlewares/loggerMiddleware';
import exceptionMiddleware from './middlewares/exceptionMiddleware';
import timeMiddleware from './middlewares/timeMiddleware';

const reducer = combineReducers({
  counter: counterReducer
});

const store = createStore(reducer);
const next = store.dispatch;

const logger = loggerMiddleware(store);
const exception = exceptionMiddleware(store);
const time = timeMiddleware(store);
store.dispatch = exception(time(logger(next)));

// store.dispatch = applyMiddleware(exceptionMiddleware, loggerMiddleware)(store);

store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter.count);
});

/*自增*/
store.dispatch({
  type: 'INCREMENT'
});
store.dispatch({
  type: 'DECREMENT'
});