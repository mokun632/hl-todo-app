import { reducerWithInitialState } from "typescript-fsa-reducers";
import { TodoCard } from "../../domain/entity/todoCard";
import todoCardListActions from "./action";

const init: TodoCard = {
  title: "",
  todoCardList: [],
};

const todoCardReducer = reducerWithInitialState(init)
  .case(
    todoCardListActions.setTodoCardTitle,
    (state, payload) => ({
      ...state,
      title: payload
    })
  )
  .case(
    todoCardListActions.addTodoCardList,
    (state, payload) => ({
      ...state,
      title: "",
      todoCardList: [...state.todoCardList, {title: payload, preTodoText: "", todos: []}]
    })
  )
  .case(
    todoCardListActions.setTodoText,
    (state, payload) => ({
      ...state,
      todoCardList: state.todoCardList.map((t, i) =>
        i === payload.index ? {...t, preTodoText: payload.todoText} : t
      )
    })
  )
  .case(
    todoCardListActions.addTodo,
    (state, payload) => ({
      ...state,
      todoCardList: state.todoCardList.map((t, i) => 
        i === payload.index ? {...t, preTodoText: "", todos: [...t.todos, {todoText: payload.todoText, doneFlg: payload.doneFlg}]}: t
      )
    })
  )
  .case(
    todoCardListActions.setDoneFlg,
    (state, payload) => ({
      ...state,
      todoCardList: state.todoCardList.map((todoCard, todoCardIndex) =>  
        todoCardIndex === payload.todoCardIndex ? {...todoCard, todos: [
          ...todoCard.todos.map((todo, i) => 
          i === payload.index ? {...todo, doneFlg: payload.doneFlg} : todo
          ) 
        ]
      } : todoCard
    )
    })
  );

  export default todoCardReducer;
