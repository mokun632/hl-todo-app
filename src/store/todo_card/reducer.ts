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
      todoCardList: state.todoCardList.map((todoCard, todoCardIndex) =>  
        todoCardIndex === payload.todoCardIndex ? {...todoCard, todos: [
          ...todoCard.todos.map((todo, i) => 
          i === payload.index ? {...todo, doneFlg: payload.doneFlg} : todo
          ) 
        ]
      } : todoCard
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
    todoCardActions.sortTodoList,
    (state, payload) => ({
      ...state,
      todoCardList: state.todoCardList.map((card, i) => 
      i === payload.cardIndex ?
      {...card,
       todos: update(card.todos,
                {$splice:[
                  [payload.dragIndex, 1],
                  [payload.hoverIndex, 0, payload.todo]
                ]}
              )
      } 
      :
      card
      )
    })
  );

  export default todoCardReducer;
