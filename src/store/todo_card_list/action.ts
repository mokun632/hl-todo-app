import actionCreaterFactory from "typescript-fsa";
import { TodoCard } from "../../domain/entity/todoCard";

const actionCraeter = actionCreaterFactory();

const todoCardListActions = {
  addTodoCardList: actionCraeter<TodoCard>("ADD_TODO_CARD_LIST"),
};

export default todoCardListActions;
