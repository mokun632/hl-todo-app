import { FC } from "react";
import { TodoCard } from "./TodoCard";
import { InputTodo } from "./InpuTodo";
import { useDispatch } from "react-redux";
import todoCardActions from "../store/todo_card/action";
import todoCardListActions from "../store/todo_card_list/action";
import { TodoCard as ITodoCard } from "../domain/entity/todoCard";

const Todo: FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <InputTodo
        setTodoCard={ (title: string) => {dispatch(todoCardActions.setTodoCard(title))}}
        addTodoCardList={ (todoCard: ITodoCard) => {dispatch(todoCardListActions.addTodoCardList(todoCard))}}
      />
      <TodoCard
        addTodo={ (todo: string) => {dispatch(todoCardActions.addTodo(todo))} }
        setTodoText={ (todoText: string) => {dispatch(todoCardActions.setTodoText(todoText))}}
        setOnDoneFlg={ (onDoneFlg: boolean) => {dispatch(todoCardActions.setOnDoneFlg(onDoneFlg))}}
      />
    </>
  )
};

export default Todo;
