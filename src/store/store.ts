import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { RootState } from "../domain/entity/rootState";
import todoCardReducer from "./todo_card/reducer";
import todoCardListReducer from "./todo_card_list/reducer";

const store = createStore(
  combineReducers<RootState>({
    todoCard: todoCardReducer,
    todoCardList: todoCardListReducer,
  }),
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__&&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
