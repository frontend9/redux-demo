import { createStore, combineReducers, bindActionCreators } from './redux';

import counterReducer from './reducers/counter';
import infoReducer from './reducers/info';

const reducer = combineReducers({
  counter: counterReducer,
  info: infoReducer
});

const store = createStore(reducer);

store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter.count, state.info.name, state.info.description);
});

/*返回 action 的函数就叫 actionCreator*/
function increment() {
  return {
    type: 'INCREMENT'
  }
}

function setName(name) {
  return {
    type: 'SET_NAME',
    name: name
  }
}

// const actions = {
//   increment: function () {
//     return store.dispatch(increment.apply(this, arguments))
//   },
//   setName: function () {
//     return store.dispatch(setName.apply(this, arguments))
//   }
// }

const actions = bindActionCreators({ increment, setName }, store.dispatch);

/*注意：我们可以把 actions 传到任何地方去*/
/*任何地方在实现自增的时候，根本不知道 dispatch，actionCreator等细节*/
actions.increment(); /*自增*/
actions.setName('九部威武'); /*修改 info.name*/