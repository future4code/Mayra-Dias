import React from 'react'
import AdicionarMusicas from './components/AdicionarMusica';
import Playlist from './components/Playlist';



export default class App extends React.Component{
 state = {

telaAtual: "Adicionar Musicas"

 }
 escolheTela = () =>{
  switch(this.state.telaAtual){
    case "Adicionar Musicas":
     return <AdicionarMusicas irParaPlaylist={this.irParaPlaylist}/>
    case "Playlist":
      return <Playlist irParadicionarMusicas={this.irParadicionarMusicas}/>
    default:
      return <div>Erro! Página não encontrada</div>
  }

}

irParadicionarMusicas = () =>{
 this.setState({telaAtual: "Adicionar Musicas"})

}

irParaPlaylist = () =>{
  this.setState({telaAtual: "Playlist"})


}
 
 render(){
  return (
    <div>
      {<h2>Labefy</h2>}
      {this.escolheTela()}
    </div>
  );
}
 }


