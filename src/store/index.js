import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import combineReducers from "./reducer/combinedReducers";

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cartItem', serializedState);
  } catch (e) {
    console.log(e)
  }
}
function LoadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('cartItem');
    if(serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    console.log(e);
    return undefined
  }
}
const persistedState = LoadFromLocalStorage()

const store = createStore(
  combineReducers,
  persistedState,
  applyMiddleware(thunk)
)
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
