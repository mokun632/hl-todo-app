import { Alert } from "./alert";
import { TodoCard } from "./todoCard";

export type RootState = {
  todoCard: TodoCard;
  alert: Alert;
};
