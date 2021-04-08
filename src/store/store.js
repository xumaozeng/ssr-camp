// 存储的入口
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import indexReducer from "./index";

const reducer = combineReducers({
  index: indexReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
