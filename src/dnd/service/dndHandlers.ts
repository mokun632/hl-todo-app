import { Todo, TodoCard } from "../../domain/entity/todoCard";
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

export const moveTodoHandler = (todo: Todo, dragIndex: number, hoverIndex: number, cardIndex: number) => {
  // console.log(dragIndex)
  // console.log(hoverIndex)
  console.log(`cardIndex: ${cardIndex}`)
  return todoCardActions.sortTodoList({todo: todo, cardIndex: cardIndex, dragIndex: dragIndex, hoverIndex: hoverIndex});
};
