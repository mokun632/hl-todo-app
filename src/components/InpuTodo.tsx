import { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { AlertSeverity } from '../domain/entity/alert';
import { RootState } from '../domain/entity/rootState';
import { TodoCard } from '../domain/entity/todoCard';
import { emptyMessage, isEmpty, isTooLong, maxLen, tooLongMessage, isMaxCardQty, maxQty, maxQtyMessage } from '../domain/service/validation';

const InputTodoWrapper = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: center;
  height: 30px;
`;

const InputTodoText = styled.input`
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
  setTodoCardTitle: (title: string) => void;
  addTodoCardList: (title: string) => void;
  openAlert: (severity: AlertSeverity, message: string) => void;
}

export const InputTodo: FC<Props> = (
  {
    setTodoCardTitle = () => undefined,
    addTodoCardList = () => undefined,
    openAlert = () => undefined,
  }
) => {
  const todoCard = useSelector((state: RootState) => state.todoCard);

  const addTodoCard = (title: string, todoCardList: TodoCard["todoCardList"]) => {
    isEmpty(title) ?
    openAlert("error", emptyMessage)
    :
    isTooLong(title, maxLen) ?
    openAlert("error", emptyMessage)
    :
    isMaxCardQty(todoCardList, maxQty)?
    openAlert("error", maxQtyMessage)
    :
    addTodoCardList(title)
  };

  const setTitle = (title: string) => {
    isTooLong(title, maxLen) ?
    openAlert("error", tooLongMessage)
    :
    setTodoCardTitle(title);
  };

  return (
    <>
      <InputTodoWrapper>
        <InputTodoText
          value={todoCard.title}
          onChange={e => setTitle(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && addTodoCard(todoCard.title, todoCard.todoCardList)}
        />
        <InputTodoButton
          onClick={_ => addTodoCard(todoCard.title, todoCard.todoCardList)}
        >
          Create Card
        </InputTodoButton>
      </InputTodoWrapper>
    </>
  )
}
