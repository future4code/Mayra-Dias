import React from 'react';
import { useHistory } from 'react-router';


export const AdminHomePage = () => {
  const history = useHistory()

const goToCreateTripPage = () => {
  history.push("/admin/trips/create")
}

const goToLoginPage = () => {
  history.push("/login")

}

const goToHomePage = () => {
  history.push("/")
}
  return (
    <div>
    <p>Painel Administrativo</p>
    <button onClick={goToHomePage}>Voltar</button>
    <button onClick={goToCreateTripPage}>Criar Viagem</button>
    <button onClick={goToLoginPage}>Logout</button>
    </div>
  );
}


