import { TextField } from '@material-ui/core';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AlertSeverity } from '../domain/entity/alert';
import { RootState } from '../domain/entity/rootState';
import { isTooLong, maxLen, tooLongMessage } from '../domain/service/validation';
import DraggableTodoCard from './DraggableTodoCard';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../dnd/entity/ItemTypes';
import { moveCardHandler, findCardHandler } from '../dnd/service/dndHandlers';

const TodoCardsWrapper = styled.div`
  display: grid;
  grid-template-rows: 300px 1fr;
  grid-template-columns: 240px 240px 240px 240px 240px;
  grid-gap: 16px;
  align-items: center;
  justify-content: center;
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

const TodoMainTitle = styled.div`
  position: absolute;
  height: 20px;
  width: 90%;
  top: 1px;
  font-size: 15px;
  text-align: center;
  white-space:　nowrap;
  overflow: scroll;

  @media (max-width: 500px) {
    font-size: 5px;
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
    width: 130px;
    height: 180px;
    margin-top: 2px;
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
  margin: 8px 0;
  @media (max-width: 500px) {
    margin: 0;
  }
`;

const TodoCheckBoxLabel = styled.label`
  width: 100%;

  @media (max-width: 500px) {
    font-size: 5px;
  }
`;

const TodoText = styled(TextField)`
  margin: 0;
  width: 100%;
`;

type Props = {
  addTodo: (provTodoText: string, doneFlg: boolean, index: number) => void;
  setTodoText: (provTodoText: string, index: number) => void;
  setDoneFlg: (doneFlg: boolean, todoCardIndex: number, index: number) => void;
  openAlert: (severity: AlertSeverity, message: string) => void;
}

export const TodoCard: FC<Props> = (
  {
    addTodo = () => undefined,
    setTodoText = () => undefined,
    setDoneFlg = () => undefined,
    openAlert = () => undefined,
  }
) => {
  const todoCard = useSelector((state: RootState) => state.todoCard);
  const dispatch = useDispatch();
  const moveCard = (id: string, atIndex: number) => { dispatch(moveCardHandler(id, atIndex, todoCard )) };
  const findCard = (id: string) => { 
    const card = findCardHandler(id, todoCard);
    return { index: card.index }
  };

  const [, drop] = useDrop({ accept: ItemTypes.CARD })

  return (
    <TodoCardsWrapper ref={drop}>
      {todoCard.todoCardList.length > 0 && 
      (
        todoCard.todoCardList.map((ItodoCard, todoCardIndex) => (
        <DraggableTodoCard key={todoCardIndex} id={`${ItodoCard.id}`} card={ItodoCard} moveCard={moveCard} findCard={findCard}>
          <TodoCards>
           <TodoMainTitle >
             {ItodoCard.title}
           </TodoMainTitle>
           <TodoMain>
            {ItodoCard.todos.map((todo, i) => (
              <TodoCheckBoxWrapper key={i}>
                <input 
                  type="checkbox"
                  onClick={_ => setDoneFlg( todo.doneFlg? false : true, todoCardIndex, i)}
                  checked={todo.doneFlg}
                />
                <TodoCheckBoxLabel>
                  {todo.doneFlg? 
                  <del>
                    {todo.todoText}
                  </del>
                  :
                  todo.todoText}
                </TodoCheckBoxLabel>
              </TodoCheckBoxWrapper>
              )
             )
            }
            {
              ItodoCard.todos.length < 6 &&
              (  
                <TodoCheckBoxWrapper>
                  <TodoText
                    size="medium"
                    value={todoCard.todoCardList[todoCardIndex].provTodoText}
                    onChange={e => {
                      isTooLong(e.target.value, maxLen)?
                      openAlert("error", tooLongMessage)
                      :
                      setTodoText(e.target.value, todoCardIndex)
                    }}
                    onKeyPress={e => {
                      e.key === "Enter" && 
                      !!todoCard.todoCardList[todoCardIndex].provTodoText &&
                      addTodo(todoCard.todoCardList[todoCardIndex].provTodoText, false, todoCardIndex)
                    }} 
                    onBlur={_ => {
                      !!todoCard.todoCardList[todoCardIndex].provTodoText && 
                      addTodo(todoCard.todoCardList[todoCardIndex].provTodoText, false, todoCardIndex)
                    }}
                  />
                </TodoCheckBoxWrapper>
              )
            }
           </TodoMain>
          </TodoCards>
        </DraggableTodoCard>
       ))
      )
      }
    </TodoCardsWrapper>
  )
};
