import axios from 'axios'
import React from 'react'
import styled from 'styled-components'


const CardUsuario = styled.div`
border: 2px solid black;
padding: 10px;
margin: 10px;
width: 300px;
justify-content: space-between;
display: flex;
`

export default class TelaUsuario extends React.Component{
   state = {
usuarios:[

]

   }
componentDidMount(){
this.pegarUsuarios()

}

pegarUsuarios = () =>{
const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    axios.get(url, {
headers: {
    Authorization: "Mayra-Barbosa-carver"
}

})
.then((resposta) => {
this.setState({usuarios: resposta.data})
})
.catch((error) => {
alert("Ocorreu um problema, tente novamente.")
})
 
deletarUsuario = (id) => {
const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
axios.delete(url, {
  headers:{
    Authorization: "Mayra-Barbosa-carver"
  }

})
.then((resposta) => {
alert("Usuário deletado(a) com sucesso.")
this.pegarUsuarios()
})
.catch((error) => {
  alert("Ocorreu um erro tente novamente.")  

})

}

}   
    
    render(){
      const listaUsuario = this.state.usuarios.map((user) => {
         return (
         <CardUsuario key={user.id}>
           {user.name}
          <button onClick={() => this.deletarUsuario(user.id)}>X</button>
          </CardUsuario>
    )
      
})

        return (
        <div>
            <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
            <h2>Lista de Usuários</h2>
            {listaUsuario}
        </div>
    
      )
     }
    }
    