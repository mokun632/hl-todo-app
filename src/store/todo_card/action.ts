import actionCreaterFactory from "typescript-fsa";
import { Card } from "../../domain/entity/todoCard";

const actionCraeter = actionCreaterFactory();

const todoCardActions = {
  setTodoCardTitle: actionCraeter<string>("SET_TODO_CARD_TITLE"),
  addTodoCardList: actionCraeter<string>("ADD_TODO_CARD_LIST"),
  setTodoText: actionCraeter<{provTodoText: string, index: number}>("SET_TODO_TEXT"),
  addTodo: actionCraeter<{provTodoText: string, doneFlg: boolean, index: number}>("ADD_TODOS"),
  setDoneFlg: actionCraeter<{doneFlg: boolean, todoCardIndex: number, index: number}>("SET_DONE_FLG"),
  sortTodoCardList: actionCraeter<{todoCardList: Card, dragIndex: number, hoverIndex: number}>("SORT_TODO_CARD_LIST"),
};

export default todoCardActions;
