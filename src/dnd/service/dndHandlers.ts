import { TodoCard } from "../../domain/entity/todoCard";
import todoCardActions from "../../store/todo_card/action";

export const moveCardHandler = (id: string, atIndex: number, _card: TodoCard) => {
  const { card, index } = findCardHandler(id, _card)
  return todoCardActions.sortTodoCardList({card, index, atIndex});
}

export const findCardHandler = (id: string, _card: TodoCard) => {
  const card = _card.todoCardList.filter((c) => `${c.id}` === id)[0]
  return {
    card,
    index: _card.todoCardList.indexOf(card),
  }
};
