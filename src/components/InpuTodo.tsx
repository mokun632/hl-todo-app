import { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../domain/entity/rootState';

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
}

export const InputTodo: FC<Props> = (
  {
    setTodoCardTitle = () => undefined,
    addTodoCardList = () => undefined,
  }
) => {
  const todoCard = useSelector((state: RootState) => state.todoCard);

  return (
    <>
      <InputTodoWrapper>
        <InputTodoText
          value={todoCard.title}
          onChange={e => setTodoCardTitle(e.target.value)} 
        />
        <InputTodoButton
          disabled={!(todoCard.title.length < 10) || !todoCard.title}
          onClick={_ => {
            addTodoCardList(todoCard.title);
          }}
        >
          Create Card
        </InputTodoButton>
      </InputTodoWrapper>
    </>
  )
}
