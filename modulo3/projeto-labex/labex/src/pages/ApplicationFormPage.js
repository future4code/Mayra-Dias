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
    <from>
    <select>
  <option value disabled selected>Escolha uma viagem</option>
  <option value="">Orbite a Terra na Virada do Ano</option>
  <option value="">Havana</option>
  <option value="">MillkWay Tour</option>
  <option value="">Viagem da minha vida</option>  <option value="valor3">MillkWay Tour</option>
  <option value="">Labenu</option>
  <option value="">Viagem da labenu</option>
  <option value="">PLANETA VERMELHO</option>
  <option value="">Venus Nigth Out</option>
  <option value="">Viagem da minha vida</option>
  </select>
      <input
       name=""
       value=""
       onChange=""
       placeholder="Nome"
       required
       type=""
      /> 
      <input
      name=""
      value=""
      onChange=""
      placeholder="Idade"
      required
      type=""
     />
      <input
       name=""
       onChange=""
       value=""
       placeholder="Texto de Candidatura"
       required
       type=""
      />
       <input
       name=""
       value=""
       onChange=""
       placeholder="Profissão"
       required
       type=""
      />
       <input
       name=""
       value=""
       onChange=""
       placeholder="Escolha um País"
       required
       type=""
      />
      </from>
    <button onClick={goToListTripsPage}>Voltar</button>
    <button>Enviar</button>
    </div>
  );
}
