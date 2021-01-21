import React, { FC } from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import App from './components/App'
import store from "./store/store";

const GlobalStyle = createGlobalStyle`
  body * {
    box-sizing: border-box;
    font-family: Osaka,"ＭＳ Ｐゴシック","MS PGothic",Sans-Serif;
  }
`;

export const Main: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
};

ReactDOM.render(
  <Main />, document.getElementById("root")
);
