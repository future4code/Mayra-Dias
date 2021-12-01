import React from 'react'
import styled from 'styled-components'

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
>h2{
  height: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%)
}
`
const ContainerBotao = styled.div`
display: flex;
justify-content: space-evenly;
-webkit-box-align: center;
align-items: center;
padding: 500px 0px; 
>button{
  border-radius: 50%;
  width: 90px px;
  height: 90px;
  border: 1px solid red;
  color: red;
  font-size: 50px;
  transform: scale(0.7);
  position: relative;
  overflow: hidden;
}    

`
const BotaoContainer = styled.div`
   position: fixed;
    bottom: 5px;
    right: 5px;
`

export default class App extends React.Component {
  render(){
  return (
    <div>
    <Container>
      <h2>astromatch</h2>
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
}


