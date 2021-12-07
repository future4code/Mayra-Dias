import React from 'react';
import {useHistory} from "react-router-dom"


export const LoginPage = () => {
  const history = useHistory()


  const goToHomePage = () => {
    history.push("/")
  }
  return (
    <div>
    <p>Login</p>
    <button onClick={goToHomePage}>Voltar</button>
    <button>Entrar</button>
    </div>
  );
}
