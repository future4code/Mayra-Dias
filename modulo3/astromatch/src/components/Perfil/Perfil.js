import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useEffect, useState} from 'react'
import Titulo from '../Perfil/img/download.png'
import Titulo2 from '../Perfil/img/add (1).png'


const Container = styled.div`
    width: 400px;
    height: 600px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgb(0 0 0 / 6%) 0px 0px 5px;

`

const ContainerBotao = styled.div`
display: flex;
justify-content: space-evenly;
-webkit-box-align: center;
align-items: center;
padding: 397px 0px; 
>button{
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: 1px solid red;
  color: red;
  font-size: 50px;
  transform: scale(0.7);
  position: relative;
  overflow: hidden;
   &:hover{cursor: pointer}
}    

`
const BotaoContainer = styled.div`
   position: fixed;
    bottom: 5px;
    right: 5px;
`
const Header = styled.div`
width: 100%;
height: 10%;
display:flex;
justify-content: space-around;
align-items: center;

`
const Icone = styled.img`
width: 8%;
height:44%;

`
const Title = styled.img`
width: 39%;
height: 86%;
`

function Perfil(){
  const [perfil, setPerfil] = useState({})
  const [outroperfil, setOutroPerfil] = useState(0)
  const receberPerfil = () =>{
      axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:mayra-carver/person")
      .then((res) => {
       const perfilNovo = res.data.profile
       setPerfil(perfilNovo)   
      })
      .catch((err) => {
       console.log(err.response)
      })
    }
 useEffect(() => {
  receberPerfil()
 }, [])

const perfilNovo = () => {
setOutroPerfil(outroperfil+1)
}
  return (
    <div>
    <Container>
      <Header>
     <Title src= {Titulo}/>
     <Icone src= {Titulo2}/>
      </Header>
      <hr/>
       {      perfil.id?
            <p>{perfil.name}</p>
            :
            <p>Não tem perfil disponível </p>
        }
    <ContainerBotao> 
    <button>✖️</button>
    <button>💚</button>
    </ContainerBotao>
    </Container>
    <BotaoContainer>
    <button>Limpar swipes e matches</button>
    </BotaoContainer>
  </div>

)
}

export default Perfil;


