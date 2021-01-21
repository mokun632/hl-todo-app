import { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../domain/entity/rootState';
import { TodoCard as ITodoCard, TodoCard } from '../domain/entity/todoCard';

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
  setTodoCard: (title: string) => void;
  addTodoCardList: (todoList: ITodoCard) => void;
}

export const initTodoCard: TodoCard = {
  title: "",
  todoText: "",
  onDoneFlg: false,
  todos: [],
};

export const InputTodo: FC<Props> = (
  {
    setTodoCard = () => undefined,
    addTodoCardList = () => undefined,
  }
) => {
  const todoCard = useSelector((state: RootState) => state.todoCard);
  const todoCardList = useSelector((state: RootState) => state.todoCardList);

  return (
    <>
      <InputTodoWrapper>
        <InputTodoText
          value={todoCard.title}
          onChange={e => setTodoCard(e.target.value)} 
        />
        <InputTodoButton
          disabled={!(todoCardList.todoCards.length < 10) || !todoCard.title}
          onClick={_ => {
            addTodoCardList({...initTodoCard, title: todoCard.title });
            todoCard.title = "";
          }}
        >
          Create Card
        </InputTodoButton>
      </InputTodoWrapper>
    </>
  )
}
