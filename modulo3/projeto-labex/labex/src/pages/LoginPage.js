import React from 'react';
import {useHistory} from "react-router-dom"
import { useState } from "react";
import axios from "axios"


export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitLogin = () => {
    console.log(email, password);
    const body = {
      email: email,
      password: password
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
       <input
        placeholder="email"
        type="email"
        value={email}
        onChange={onChangeEmail}
      />
      <input
        placeholder="senha"
        type="password"
        value={password}
        onChange={onChangePassword}
      />
      <button onClick={onSubmitLogin}>Entrar</button>
    <button onClick={goToHomePage}>Voltar</button>
    </div>
  );
}
