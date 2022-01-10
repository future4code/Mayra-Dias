import React, {useState} from 'react'
import Router from './routes/Router';
import tema from './constants/tema'
import { ThemeProvider } from '@material-ui/core/styles';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  const token = localStorage.getItem("token")
  const [botaoDaBarra, setBotaoDaBarra] = useState(token ? "Logout":"Login")
  
  return (
    < ThemeProvider theme={tema}>
      <BrowserRouter>
      <Header botaoDaBarra={botaoDaBarra} setBotaoDaBarra={setBotaoDaBarra}/>
      <Router setBotaoDaBarra={setBotaoDaBarra}/>
     </BrowserRouter>
    </ ThemeProvider>

  );
}

export default App;
