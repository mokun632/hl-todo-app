import { FC } from "react";
import { TodoCard } from "./TodoCard";
import { InputTodo } from "./InpuTodo";
import { useDispatch } from "react-redux";
import todoCardActions from "../store/todo_card/action";
import alertActions from "../store/alert/action";
import { AlertSeverity } from "../domain/entity/alert";

const Todo: FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <InputTodo
        setTodoCardTitle={ (provTitle: string) => {dispatch(todoCardActions.setTodoCardTitle(provTitle))}}
        addTodoCardList={ (provTitle: string) => {dispatch(todoCardActions.addTodoCardList(provTitle))}}
        openAlert={ (severity: AlertSeverity, message: string) => {dispatch(alertActions.openAlert({severity, message}))}}
      />
      <TodoCard
        addTodo={ (provTodoText: string, doneFlg: boolean, index: number) => {dispatch(todoCardActions.addTodo({provTodoText, doneFlg, index}))} }
        setTodoText={ (provTodoText: string, index: number) => {dispatch(todoCardActions.setTodoText({provTodoText, index}))}}
        setDoneFlg={ (doneFlg: boolean, todoCardIndex: number, index: number) => {dispatch(todoCardActions.setDoneFlg({doneFlg, todoCardIndex, index}))}}
        openAlert={ (severity: AlertSeverity, message: string) => {dispatch(alertActions.openAlert({severity, message}))}}
      />
    </>
  )
};

export default Todo;
