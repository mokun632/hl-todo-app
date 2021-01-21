import { TodoCard } from "./todoCard";
import { TodoCardList } from "./todoCardList";

export type RootState = {
  todoCard: TodoCard;
  todoCardList: TodoCardList;
};
