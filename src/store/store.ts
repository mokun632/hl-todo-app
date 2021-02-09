import { createStore, combineReducers, compose, } from "redux";
import { RootState } from "../domain/entity/rootState";
import alertReducer from "./alert/reducer";
import todoCardReducer from "./todo_card/reducer";

const store = createStore(
  combineReducers<RootState>({
    todoCard: todoCardReducer,
    alert: alertReducer
  }),
  compose(
    (window as any).__REDUX_DEVTOOLS_EXTENSION__&&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
