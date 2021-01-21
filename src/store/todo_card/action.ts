import actionCreaterFactory from "typescript-fsa";
import { TodoCard } from "../../domain/entity/todoCard";

const actionCraeter = actionCreaterFactory();

const todoCardActions = {
  setTodoCard: actionCraeter<TodoCard["title"]>("SET_TODO_CARD"),
  addTodo: actionCraeter<string>("ADD_TODOS"),
  setTodoText: actionCraeter<TodoCard["todoText"]>("SET_TODO_TEXT"),
  setOnDoneFlg: actionCraeter<TodoCard["onDoneFlg"]>("SET_ONDONE_FLG"),
};

export default todoCardActions;
