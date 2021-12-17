import React from 'react';
import {useHistory} from "react-router-dom"
import useProtectedPage from '../hooks/useProtect';



export const TripDetailsPage = () => {
  const history = useHistory()
 useProtectedPage()
  const goToApplicationFormPage = () => {
    history.push("/admin/trips/list")
  }
  
  return (
    <div>
    <p>Detalhe de uma viagem </p>
    <button onClick={goToApplicationFormPage}>Voltar</button>

    </div>
  );
}
