import { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { AlertSeverity } from '../domain/entity/alert';
import { RootState } from '../domain/entity/rootState';
import { TodoCard } from '../domain/entity/todoCard';
import { emptyMessage, isEmpty, isTooLong, maxLen, tooLongMessage, isMaxCardQty, maxQty, maxQtyMessage, uaCheck, spMaxLen } from '../domain/service/validation';

const InputTodoWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  height: 30px;

  @media (max-width: 850px) {
    margin-top: 80px;
  }
`;

const InputTodoCardTitle = styled.input`
  vertical-align: middle;
  border: 2px solid #33322E;
  border-radius: 4px;
  width: 35%;
  height: 26px;
  outline: none;
`;

const InputTodoButton = styled.button`
  transition: 0.1s;
  vertical-align: middle;
  background: #D0F4F0;
  border: 2px solid #33322E;
  box-sizing: border-box;
  font-size: 14px;
  border-radius: 4px;
  box-shadow: 3px 3px 0px;
  outline: none;

  :active {
    transform: translate(1px, 1px);
    box-shadow: none;
  };
`;

type Props= {
  setTodoCardTitle: (provTitle: string) => void;
  addTodoCardList: (provTitlele: string) => void;
  openAlert: (severity: AlertSeverity, message: string) => void;
}

let isIME: boolean = false;
const checkMaxLen = uaCheck ? spMaxLen : maxLen;

export const InputTodo: FC<Props> = (
  {
    setTodoCardTitle = () => undefined,
    addTodoCardList = () => undefined,
    openAlert = () => undefined,
  }
) => {
  const todoCard = useSelector((state: RootState) => state.todoCard);

  const addTodoCard = (provTitle: string, todoCardList: TodoCard["todoCardList"]) => {
    isEmpty(provTitle) ?
    openAlert("error", emptyMessage)
    :
    isTooLong(provTitle, maxLen) ?
    openAlert("error", emptyMessage)
    :
    isMaxCardQty(todoCardList, maxQty)?
    openAlert("error", maxQtyMessage)
    :
    addTodoCardList(provTitle)
  };

  const setTitle = (provTitle: string) => {
    isTooLong(provTitle, checkMaxLen) ?
    openAlert("error", tooLongMessage)
    :
    setTodoCardTitle(provTitle);
  };

  return (
    <>
      <InputTodoWrapper>
        <InputTodoCardTitle
          value={todoCard.provTitle}
          onCompositionStart={e => {
            isIME = false;
          }}
          onCompositionEnd={e => {
            isIME = true;
          }}
          onChange={e => setTitle(e.target.value)}
          onKeyDown={e => (isIME || todoCard.provTitle.match(/^[A-Za-z0-9]*$/)) && 
                          e.key === "Enter" && 
                          addTodoCard(todoCard.provTitle, todoCard.todoCardList)}
        />
        <InputTodoButton
          onClick={_ => addTodoCard(todoCard.provTitle, todoCard.todoCardList)}
        >
          Create Card
        </InputTodoButton>
      </InputTodoWrapper>
    </>
  )
}
