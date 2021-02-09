import { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import styled from 'styled-components';
import { uaCheck } from '../domain/service/validation';
import Alert from './Alert';
import Todo from './Todo';

const HeaderWrapper = styled.header`
  width: 100%;
`;

const HeaderLogo = styled.h1`
  margin-left: 16px;
`;

const App: FC = () => {

  return (
    <>
      <HeaderWrapper>
        <HeaderLogo>
          Todo
        </HeaderLogo>
      </HeaderWrapper>
      <DndProvider backend={(uaCheck ? TouchBackend : HTML5Backend)}>
        <Todo />
      </DndProvider>
      <Alert />
    </>
  )
};

export default App;
