import React from 'react';
import { useHistory } from 'react-router';
import useProtectedPage from '../hooks/useProtect';


export const CreateTripPage = () => {
  const history = useHistory()
  useProtectedPage()

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
