import { TodoCard } from "../entity/todoCard";

const COLORS = [ '#00ffea', '#b600fe', '#00C49F', '#FFBB28', '#00a2ff', '#ff0000', '#27a700', '#fffb00', '#fe00dc', '#000294' ];

export const createBarData = (todoCard: TodoCard) => {
  const preData = todoCard.todoCardList.map((todo, _) => {
    return{
      name: todo.title,
      completed: !todo.todos.length ? 0 : Math.floor(todo.todos.filter((t) => t.doneFlg).length / 6 * 100),
      uncompleted: !todo.todos.length ? 0 : Math.floor(todo.todos.filter((t) => !t.doneFlg).length / 6 * 100),
    };
  });
  const notMuch = 10 - preData.length;
  return !notMuch ? preData : [...preData, ...[...Array(notMuch)].map(() => { return{ name: "", uncompleted: 0, completed: 0, } })]
};

export const createTodoRateData = (todoCard: TodoCard) => {
  const doneFlgCount = todoCard.todoCardList.map((c, _) => {
   return c.todos.filter((t, _) => t.doneFlg)
  }
  ).flat().length;
  const totalDoneFlgCount = todoCard.todoCardList.map((c, _) => 
    c.todos
  ).flat().length;
  const doneFlgRate = Math.floor(doneFlgCount / totalDoneFlgCount * 100);
  const otherDoneRate = 
    todoCard.todoCardList.map((c, i) => {
    const n = Math.floor(c.todos.filter((t, _) => t.doneFlg).length / c.todos.length * 100);
    return {
      name: c.title,
      uv: !n ? 0 : n,
      fill: `${COLORS[i % COLORS.length]}`
    }
  })
  return [{name: "", uv: 100, fill: "#ffffff"}, {name: "全体完了率", uv: !doneFlgRate ? 0 : doneFlgRate, fill: "#00ff68"}, ...otherDoneRate]
};
