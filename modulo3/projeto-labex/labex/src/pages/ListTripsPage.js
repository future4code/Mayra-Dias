import React from 'react';
import {useHistory} from "react-router-dom"

export const ListTripsPage = () => {

  const history = useHistory()

  const goToApplicationFormPage = () => {
    history.push("/trips/application")
  }
  
  const goToHomePage = () => {
    history.push("/")
  }
  
  return (
    <div>
    <p>Lista de Viagens</p>
    <button onClick= {goToHomePage}>Voltar</button>
    <button onClick={goToApplicationFormPage}>Inscrever-se</button>
    </div>
  );
}
