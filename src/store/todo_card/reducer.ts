import { reducerWithInitialState } from "typescript-fsa-reducers";
import { TodoCard } from "../../domain/entity/todoCard";
import todoCardActions from "./action";

export const initTodoCard: TodoCard = {
  title: "",
  todoText: "",
  onDoneFlg: false,
  todos: [],
};

const todoCardReducer = reducerWithInitialState(initTodoCard)
  .case(
    todoCardActions.setTodoCard,
    (state, payload) => ({
      ...state,
      title: payload
    })
  )
  .case(
    todoCardActions.addTodo,
    (state, payload) => ({
      ...state,
      todos: [...state.todos, payload]
    })
  )
  .case(
    todoCardActions.setTodoText,
    (state, payload) => ({
      ...state,
      todoText: payload
    })
  )
  .case(
    todoCardActions.setOnDoneFlg,
    (state, payload) => ({
      ...state,
      onDoneFlg: payload
    })
  );

  export default todoCardReducer;
