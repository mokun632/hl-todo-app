import { FC } from 'react';
import styled from 'styled-components';
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
      <Todo />
    </>
  )
};

export default App;
