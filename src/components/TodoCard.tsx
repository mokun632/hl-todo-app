import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { TextField, useMediaQuery } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { AlertSeverity } from '../domain/entity/alert';
import { RootState } from '../domain/entity/rootState';
import { isTooLong, maxLen, spMaxLen, tooLongMessage, uaCheck } from '../domain/service/validation';
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

  @media (max-width: 850px) {
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

  @media (max-width: 850px) {
    font-size: 10px;
  }
`;

const DeleteTodoCardButton = styled.button`
  position: absolute;
  top: -10px;
  right: -5px;
  transition: 0.1s;
  background: #ebebeb;
  border: 1px solid #33322E;
  box-sizing: border-box;
  font-size: 5px;
  border-radius: 17px;
  box-shadow: 1px 1px 0px;
  outline: none;
  overflow: visible;

  @media (max-width: 850px) {
    top: -13px;
    right: -10px;
  }
  :active {
    transform: translate(1px, 1px);
    box-shadow: none;
  };
`;

const TodoCards = styled.div`
  position: relative;
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

  @media (max-width: 850px) {
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
  position: relative;
  display: table-cell;
  margin: 8px 0;
  white-space: nowrap;

  @media (max-width: 850px) {
    margin: 0;
  }
`;

const DeleteTodoButton = styled(DeleteIcon)`
  position: absolute;
  top: -1px;
  right: 0px;
  transition: 0.1s;

  @media (max-width: 850px) {
    top: 4px;
    right: -3px;
  }

  :active {
    transform: translate(1px, 1px);
    box-shadow: none;
  };
`;

const TodoCheckBoxLabel = styled.label`
  width: 100%;

  @media (max-width: 850px) {
    font-size: 10px;
  }
`;

const TodoText = styled(TextField)`
  margin: 0;
  width: 100%;
`;

type Props = {
  addTodo: (provTodoText: string, doneFlg: boolean, index: number) => void;
  setTodoText: (provTodoText: string, index: number) => void;
  setDoneFlg: (doneFlg: boolean, cardIndex: number, index: number) => void;
  openAlert: (severity: AlertSeverity, message: string) => void;
  deleteTodoCard: (cardIndex: number) => void;
  deleteTodo: (cardIndex: number, todoIndex: number) => void;
}

const checkMaxLen = uaCheck ? spMaxLen : maxLen;

export const TodoCard: FC<Props> = (
  {
    addTodo = () => undefined,
    setTodoText = () => undefined,
    setDoneFlg = () => undefined,
    openAlert = () => undefined,
    deleteTodoCard = () => undefined,
    deleteTodo = () => undefined,
  }
) => {
  const todoCard = useSelector((state: RootState) => state.todoCard);
  const dispatch = useDispatch();
  const moveCard = (id: string, atIndex: number) => { dispatch(moveCardHandler(id, atIndex, todoCard )) };
  const findCard = (id: string) => { 
    const card = findCardHandler(id, todoCard);
    return { index: card.index }
  };
  const belowWidth = useMediaQuery('(max-width: 850px)')

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
           <DeleteTodoCardButton onClick={_ => deleteTodoCard(todoCardIndex)}>
              <DeleteIcon style={belowWidth ? {fontSize: 14} : {fontSize: 20}} />
           </DeleteTodoCardButton>
            <TodoMain>
             {ItodoCard.todos.map((todo, i) => (
               <TodoCheckBoxWrapper key={i}>
                 <input 
                   type="checkbox"
                   onChange={_ => setDoneFlg( todo.doneFlg? false : true, todoCardIndex, i)}
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
                 <DeleteTodoButton style={belowWidth ? {fontSize: 17} : {fontSize: 20}} onClick={_ => deleteTodo(todoCardIndex, i)} />
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
                       isTooLong(e.target.value, checkMaxLen)?
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
