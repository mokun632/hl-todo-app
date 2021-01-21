import { reducerWithInitialState } from "typescript-fsa-reducers";
import { TodoCardList } from "../../domain/entity/todoCardList";
import todoCardActions from "./action";

const init: TodoCardList = {
  todoCards: [],
};

const todoCardListReducer = reducerWithInitialState(init)
  .case(
    todoCardActions.addTodoCardList,
    (state, payload) => ({
      ...state,
      todoCards: [ ...state.todoCards, payload ]
    })
  );

  export default todoCardListReducer;
