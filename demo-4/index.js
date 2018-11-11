import { createStore, combineReducers } from './redux';

import counterReducer from './reducers/counter';
import infoReducer from './reducers/info';

const reducer = combineReducers({
  counter: counterReducer,
  info: infoReducer
});

/** 
 * 注意：我们没有传 initState 进去，因为初始化的时候会执行 dispatch({ type: Symbol() });;
 * 触发 state = reducer(state, action)
 * 因为 state 为 undefined，action.type 为不匹配任何计划中 type 的值，所以会返回 reducer 中设置的默认值
 * */
const store = createStore(reducer);

/*看看初始化的 state 是什么？*/
console.dir(store.getState());

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