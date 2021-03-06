import { useMediaQuery } from "@material-ui/core";
import { FC } from "react";
import { useSelector } from "react-redux";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, RadialBarChart, RadialBar
} from 'recharts';
import styled from "styled-components";
import { RootState } from "../domain/entity/rootState";
import { createBarData, createTodoRateData } from "../domain/service/chartDataService";

const ChartWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 70px;
  overflow: scroll;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    grid-gap: 3px;
    margin: 0 30px;
  }
`;

type BarChartType = { name: string, uncompleted: number, completed: number, }[];

type TodoRateType = { name: string, uv: number, fill: string }[];

const Chart: FC = () => {
  const todoCard = useSelector((state: RootState) => state.todoCard);
  const belowWidth = useMediaQuery('(max-width: 850px)')
  let barData: BarChartType = createBarData(todoCard);
  let todoRateData: TodoRateType = createTodoRateData(todoCard);

  return (
    <ChartWrapper>
      <BarChart
        width={belowWidth ? 400 : 500}
        height={300}
        data={barData}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[0, 100]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="completed" stackId="a" fill="#82ca9d" />
        <Bar dataKey="uncompleted" stackId="a" fill="#8884d8" />
      </BarChart>
      <RadialBarChart width={belowWidth ? 400 : 500} height={belowWidth ? 200 : 300} cx={belowWidth ? 150 : 350} cy={belowWidth ? 100 : 150} innerRadius={belowWidth ? 15 : 30} outerRadius={belowWidth ? 100 : 150} barSize={belowWidth ? 8 : 14} data={todoRateData}>
        <RadialBar label={{ position: 'insideStart', fill: '#fff' }} background dataKey="uv" />
        <Legend iconSize={belowWidth ? 0 : 10} width={belowWidth ? 120 : 200} height={belowWidth ? 100 : 140} layout={belowWidth ? "vertical" : "radial"} verticalAlign={"top"} align={ belowWidth ? "right" : "center"} />
      </RadialBarChart>
    </ChartWrapper>
  )
};

export default Chart;
