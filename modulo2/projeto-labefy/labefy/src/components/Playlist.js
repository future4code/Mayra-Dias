import React from 'react'
import axios from "axios"
import styled from 'styled-components'

const Card = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px

`

export default class Playlist extends React.Component{

state = {
 musicas: []

}

componentDidMount(){
this.pegarMusicas()

}


   pegarMusicas = () =>{

      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
      axios.get(url,{
        headers: {
         Authorization: "Mayra-Barbosa-carver"
      
        }
      }).then((res) => {
      this.setState({musicas: res.data})
      
      }).catch((err) => {
      alert("Ocorreu um problema, tente novamente.")
      
      })
      
      }
      

 render(){

const listaMusicas = this.state.musicas.map((user) =>{
return <Card>{user.name}</Card>


})

   return(
      <div>
      <button onClick={this.props.irParadicionarMusicas}>Voltar página</button>
      <h2>Playlist</h2>
      {listaMusicas}
      </div>

   )

}

}