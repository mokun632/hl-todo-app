import { reducerWithInitialState } from "typescript-fsa-reducers";
import { TodoCard } from "../../domain/entity/todoCard";
import update from 'immutability-helper';
import todoCardActions from "./action";

const init: TodoCard = {
  provTitle: "",
  todoCardList: [],
};

const todoCardReducer = reducerWithInitialState(init)
  .case(
    todoCardActions.setTodoCardTitle,
    (state, payload) => ({
      ...state,
      provTitle: payload
    })
  )
  .case(
    todoCardActions.addTodoCardList,
    (state, payload) => ({
      ...state,
      provTitle: "",
      todoCardList: [...state.todoCardList, {id: state.todoCardList.length + 1, title: payload, provTodoText: "", todos: []}]
    })
  )
  .case(
    todoCardActions.setTodoText,
    (state, payload) => ({
      ...state,
      todoCardList: state.todoCardList.map((t, i) =>
        i === payload.index ? {...t, provTodoText: payload.provTodoText} : t
      )
    })
  )
  .case(
    todoCardActions.addTodo,
    (state, payload) => ({
      ...state,
      todoCardList: state.todoCardList.map((t, i) => 
        i === payload.index ? {...t, provTodoText: "", todos: [...t.todos, {id: t.todos.length + 1, todoText: payload.provTodoText, doneFlg: payload.doneFlg}]}: t
      )
    })
  )
  .case(
    todoCardActions.setDoneFlg,
    (state, payload) => ({
      ...state,
      todoCardList: state.todoCardList.map((card, i) =>  
        i === payload.cardIndex ? 
        {...card, todos: [
          ...card.todos.map((todo, i) => 
          i === payload.index ? {...todo, doneFlg: payload.doneFlg} : todo
          ) 
        ]} 
        : card
    )
    })
  )
  .case(
    todoCardActions.sortTodoCardList,
    (state, payload) => ({
      ...state,
      todoCardList: update(state.todoCardList, 
        {$splice: [ 
          [payload.index, 1], 
          [payload.atIndex, 0, payload.card]
        ]
      })
    })
  )
  .case(
    todoCardActions.deleteTodoCard,
    (state, payload) => ({
      ...state,
      todoCardList: state.todoCardList.filter((_, i) => i !== payload.cardIndex)
    })
  )
  .case(
    todoCardActions.deleteTodo,
    (state, payload) => ({
      ...state,
      todoCardList: state.todoCardList.map((card, i) => (
        i === payload.cardIndex ?
        {...card, 
         todos: card.todos.filter((_, i) => i !== payload.todoIndex)
        } 
        :
        card
      ))
    })
  );

  export default todoCardReducer;
