let initState = {
  count: 0
}
export default function counterReducer(state, action) {
  /*如果 state 还没有值，那就给他初始值*/
  if (!state) {
    state = initState;
  }
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state;
  }
}