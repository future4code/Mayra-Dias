import React from 'react';
import { useHistory } from 'react-router';


export const HomePage = () => { 
 const history = useHistory()

const goToListTripsPage = () => {
  history.push("/trips/list")
}
const goToApplicationFormPage = () => {
  history.push("/admin/trips/list")
}

  return (
    <div>
    <p>Home Page</p>
    <button onClick={goToListTripsPage}>Ver Viagens</button>
    <button onClick={goToApplicationFormPage}>Área de Admin</button>
    </div>
  );
  }
