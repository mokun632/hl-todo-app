import actionCreaterFactory from "typescript-fsa";

const actionCraeter = actionCreaterFactory();

const todoCardListActions = {
  setTodoCardTitle: actionCraeter<string>("SET_TODO_CARD_TITLE"),
  addTodoCardList: actionCraeter<string>("ADD_TODO_CARD_LIST"),
  setTodoText: actionCraeter<{todoText: string, index: number}>("SET_TODO_TEXT"),
  addTodo: actionCraeter<{todoText: string, doneFlg: boolean, index: number}>("ADD_TODOS"),
  setDoneFlg: actionCraeter<{doneFlg: boolean, todoCardIndex: number, index: number}>("SET_DONE_FLG"),
};

export default todoCardListActions;
