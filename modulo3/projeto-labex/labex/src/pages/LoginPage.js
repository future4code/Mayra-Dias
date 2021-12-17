import React from 'react';
import {useHistory} from "react-router-dom"
import axios from "axios"
import useForm from '../hooks/useForm';


export const LoginPage = () => {
  const { form, onChange, cleanFields } = useForm({ email: "", password: "" });
 

  const history = useHistory();


  const login = (event) => {
    event.preventDefault();   
    console.log(form);
    cleanFields(); 
 const body = {
      email: form.email,
      password: form.password
    };

    
      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/mayra-carver/login", body)
          .then((res) => {
            localStorage.setItem("token", res.data.token)
            history.push("/admin/trips/list")
             
          })
          .catch((err) => alert(err.response.data.message))
  
  };
  const goToHomePage = () => {
    history.push("/")
  }

  
  return (
    <div>
      <h3>Login</h3>
      <from onSubmit={login}>
       <input 
        name="email"
        value={form.email}
        onChange={onChange}
        placeholder={"E-mail"}
        required
        type="email"
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={onChange}
        placeholder={"Senha"}
        required
        pattern={"^.{3,}"}
        title={"Sua senha deve ter no mínimo 3 caracteres"}
      />
      </from>
      <button onClick={login}>Entrar</button>
    <button onClick={goToHomePage}>Voltar</button>
    </div>
  );
}
