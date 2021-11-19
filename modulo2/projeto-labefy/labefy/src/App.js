import React from 'react'
import AdicionarMusicas from './components/AdicionarMusica';
import Playlist from './components/Playlist';


export default class App extends React.Component() {
 state = {

telaAtual: "Playlist de músicas"

 }
 
 
 render(){
  return (
    <div>
      <AdicionarMusicas/>
      <Playlist/>
    </div>
  );
}
 }


