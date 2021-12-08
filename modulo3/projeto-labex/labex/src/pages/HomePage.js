import React from 'react';
import { useHistory } from 'react-router';


export const HomePage = () => { 
 const history = useHistory()

const goToListTripsPage = () => {
  history.push("/trips/list")
}
const goToLoginPage = () => {
  history.push("/login")
}

  return (
    <div>
    <p>Home Page</p>
    <button onClick={goToListTripsPage}>Ver Viagens</button>
    <button onClick={goToLoginPage}>Área de Admin</button>
    </div>
  );
  }
