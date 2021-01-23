export type TodoCard = {
  title: string,
  todoCardList: {
    title: string,
    preTodoText: string,
    todos: { todoText: string, doneFlg: boolean}[]}[]
}; 
