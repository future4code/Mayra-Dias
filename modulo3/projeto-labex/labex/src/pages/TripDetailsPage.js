import React from 'react';
import {useHistory} from "react-router-dom"

export const TripDetailsPage = () => {
  const history = useHistory()

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
