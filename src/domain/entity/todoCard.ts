export type TodoCard = {
  provTitle: string,
  todoCardList: Card[]
}; 

export type Card = {
  id: number,
  title: string,
  provTodoText: string,
  todos: { id: number, todoText: string, doneFlg: boolean}[],
};