import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main.jsx';
import { setup } from "goober";
import { GlobalStyles } from '../globalStyle.jsx';

setup(React.createElement);

ReactDOM.render(
  <React.Fragment>
    <Main />
    <GlobalStyles />
  </React.Fragment>,
  document.getElementById('root')
);
