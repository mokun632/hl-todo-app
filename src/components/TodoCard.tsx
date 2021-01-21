import { TextField } from '@material-ui/core';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../domain/entity/rootState';

const TodoCardsWrapper = styled.div`
  display: grid;
  grid-template-rows: 300px 1fr;
  grid-template-columns: 240px 240px 240px 240px 240px;
  grid-gap: 16px;
  margin: 0 70px;

  @media (max-width: 500px) {
    grid-template-rows: 180px 180px 180px 180px 180px;
    grid-template-columns: 130px 130px;
    grid-gap: 8px;
    margin: 0 30px;
  }
  ::before {
    transition: all 1.5s;
    opacity: 1;
  }
`;

const TodoCards = styled.div`
  position:relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 300px;
  margin-top: 15px;
  border: 4px solid #33322E;
  box-sizing: border-box;
  box-shadow: 12px 12px 0px #33322E;
  background: #F9F3E5;
  border-radius: 24px;

  @media (max-width: 500px) {
    width: 110px;
    height: 180px;
    margin-top: 2px;
  }
`;

const TodoMainTitle = styled.div`
  position: absolute;
  height: 20px;
  width: 90%;
  top: 1px;
  font-size: 15px;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

const TodoMain = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 100%;
  border-top: 1.5px solid #33322E;
  box-sizing: border-box;
`;

const TodoCheckBoxWrapper = styled.div`
  display: table-cell;
  vertical-align: middle;
  margin: 8px 5px;
  @media (max-width: 500px) {
    margin: 0;
  }
`;

const TodoCheckBox = styled.input`
  vertical-align:middle;
`;

const TodoCheckBoxLabel = styled.label`
  vertical-align:middle;
  width: 100%;

  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

const TodoText = styled(TextField)`
  vertical-align:middle;
  margin: 0 auto;
  width: 200px;

  @media (max-width: 500px) {
    margin: 0 auto;
    width: 80px;
  }
`;

type Props = {
  addTodo: (todo: string) => void;
  setTodoText: (todo: string) => void;
  setOnDoneFlg: (onDoneFlg: boolean) => void;
}

export const TodoCard: FC<Props> = (
  {
    addTodo = (todo: string) => undefined,
    setTodoText = (todoText: string) => undefined,
    setOnDoneFlg = (onDoneFlg: boolean) => undefined,
  }
) => {
  const todoCardList = useSelector((state: RootState) => state.todoCardList);
  const todoCard = useSelector((state: RootState) => state.todoCard);

  useEffect(() => {
    setTodoText("")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todoCard.todos])

  return (
    <TodoCardsWrapper>
      {todoCardList.todoCards.length > 0 && 
      (
       todoCardList.todoCards.map((t, i) => (
         <TodoCards key={i}>
           <TodoMainTitle>
             {t.title}
           </TodoMainTitle>
           <TodoMain>
            {todoCard.todos.map((t, i) => (
              <TodoCheckBoxWrapper key={i}>
                <TodoCheckBox 
                  type="checkbox"
                  onClick={_ => setOnDoneFlg( todoCard.onDoneFlg? false : true)}
                  checked={todoCard.onDoneFlg}
                />
                <TodoCheckBoxLabel>
                  {t}
                </TodoCheckBoxLabel>
              </TodoCheckBoxWrapper>
              )
             )
            }
            {todoCard.todos.length < 6 &&
            (  
              <TodoCheckBoxWrapper>
                <TodoText
                  value={todoCard.todoText}
                  onChange={e => setTodoText(e.target.value)}
                  onKeyPress={e => {
                    e.key === "Enter" && 
                    !!todoCard.todoText &&
                    addTodo(todoCard.todoText)
                  }} 
                  onBlur={_ => {
                    !!todoCard.todoText && addTodo(todoCard.todoText)
                  }}
                />
              </TodoCheckBoxWrapper>
            )
            }
           </TodoMain>
         </TodoCards>
       ))
      )
      }
    </TodoCardsWrapper>
  )
};
