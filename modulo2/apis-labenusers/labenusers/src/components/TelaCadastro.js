import React from 'react'
import axios from 'axios'

export default class TelaCadastro extends React.Component{
    state = {
  nome: "",
  email: ""

    }

nomeCadastro = (event) => {
    this.setState({nome: event.target.value})
}

emailCadastro = (event) => {
    this.setState({email: event.target.value})
}
    
fazerCadastro = () =>{
 const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
 const body = {
   name: this.state.nome,
   email: this.state.email
 }

 axios.post(url, body, {
    headers: {  Authorization: "Mayra-Barbosa-carver"
    }
})
 .then((resposta) => {
    alert("Usuário(a) cadastrado com sucesso!")
    this.setState({nome:"", email:""})
})
.catch((error) => {
    alert(error.response.data.message)

})

}

    render(){
        return(
            <div>
               <button onClick={this.props.irParaLista}>Ir para Lista de Usuários</button>
               <h2>Cadastro</h2>
               <input 
                  placeholder={"Nome"}
                  value={this.state.nome}
                  onChange={this.nomeCadastro}
               />
               <input 
               placeholder={"E-mail"}
               value={this.state.email}
               onChange={this.emailCadastro}

               />
               <button onClick={this.fazerCadastro}>Cadastrar</button>

             </div>
    
        )
        
    }
    
}
    