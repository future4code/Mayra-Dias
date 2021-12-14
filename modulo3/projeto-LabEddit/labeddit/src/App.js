import React from 'react'
import Router from './routes/Router';
import tema from './constants/tema'
import { ThemeProvider } from '@material-ui/core/styles';


const App = () => {
  return (
    < ThemeProvider theme={tema}>
      <Router/>
    </ ThemeProvider>
  );
}

export default App;
