import { FC } from "react";
import { TodoCard } from "./TodoCard";
import { InputTodo } from "./InpuTodo";
import { useDispatch } from "react-redux";
import todoCardActions from "../store/todo_card/action";

const Todo: FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <InputTodo
        setTodoCardTitle={ (title: string) => {dispatch(todoCardActions.setTodoCardTitle(title))}}
        addTodoCardList={ (title: string) => {dispatch(todoCardActions.addTodoCardList(title))}}
      />
      <TodoCard
        addTodo={ (todoText: string, doneFlg: boolean, index: number) => {dispatch(todoCardActions.addTodo({todoText, doneFlg, index}))} }
        setTodoText={ (todoText: string, index: number) => {dispatch(todoCardActions.setTodoText({todoText, index}))}}
        setDoneFlg={ (doneFlg: boolean, todoCardIndex: number, index: number) => {dispatch(todoCardActions.setDoneFlg({doneFlg, todoCardIndex, index}))}}
      />
    </>
  )
};

export default Todo;
