import React from 'react';
import { GlobalStyle } from './components/layout/style';
import Router from './components/router';


const App = ():JSX.Element => (
  <React.StrictMode>
      <GlobalStyle />
      <Router />
  </React.StrictMode>
);

export default App;