import React from 'react';
import { useHistory } from 'react-router';


export const ApplicationFormPage = () => {

const history = useHistory()

const goToListTripsPage = () => {
  history.push("/trips/list")
}

  return (
    <div>
    <p>Inscreva-se para uma viagem</p>
    <button onClick={goToListTripsPage}>Voltar</button>
    <button>Enviar</button>
    </div>
  );
}
