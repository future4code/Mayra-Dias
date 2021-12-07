import React from 'react';
import { useHistory } from 'react-router';


export const CreateTripPage = () => {
  const history = useHistory()

  const goToApplicationFormPage = () => {
    history.goBack()
  }
  
  return (
    <div>
    <p>Criar Viagem</p>
    <button onClick={goToApplicationFormPage}>Voltar</button>
    <button>Criar</button>
    </div>
  );
}
