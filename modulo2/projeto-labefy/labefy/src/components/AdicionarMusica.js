import React from 'react'
import axios from "axios"

export default class AdicionarMusicas extends React.Component{
 state = {
    nomedamusica: "",
    artista: ""
 }

nome = (event) =>{
this.setState({nomedamusica: event.target.value})

}

artista = (event) =>{
   this.setState({artista: event.target.value})
   
   }

adicionarM = () =>{
const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const body = {
  name: this.state.nomedamusica,
  nomeartista: this.state.artista


}
axios.post(url,body,{
headers: {
   Authorization: "Mayra-Barbosa-carver"

}

}).then((res) => {
 alert("Adicionado com Sucesso")
 this.setState({nomedamusica:"", artista:""})


}) 
.catch((err) =>{
alert(err.response.data.message) 


})
}




 render(){

   return(
      <div> 
      <h2>Adicionar Músicas</h2>
      <input 
      placeholder={"Nome da música"}
      value = {this.state.nomedamusica}
      onChange = {this.nome}
      />
      <input 
      placeholder={"Artista"}
      value = {this.state.artista}
      onChange = {this.artista}
      />
          <button onClick={this.adicionarM}>Adicionar</button>
      <button onClick={this.props.irParaPlaylist}>Próxima página</button>

      </div>

   )

}

}
