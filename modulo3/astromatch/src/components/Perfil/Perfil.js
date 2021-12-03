import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'
import Titulo from '../Perfil/img/download.png'
import Titulo3 from '../Perfil/img/carregando.png'
import Tela from './Tela/Tela'
import {Container, ContainerBotao, BotaoContainer, Header, Icone, Title, ImgPerfil, Card, Bio} from './styled'




function Perfil(){
  const [perfil, setPerfil] = useState({})
  const [outroperfil, setOutroPerfil] = useState(0)
  const [telaDoPerfil, setTelaDoPerfil] = useState(true)
  const [carregando, setCarregando] = useState("")
  const [curtir, setCurtir] = useState(false)
  
  
  const receberPerfil = () =>{
    setCarregando("carregando")
      axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:mayra-carver/person")

      .then((res) => {
       const perfilNovo = res.data.profile
       setPerfil(perfilNovo)   
       setCarregando("carregou")


      })
      .catch((erro) => {
       console.log(erro.response)
       setCarregando("erro")

      })
    }
 useEffect(() => {
  receberPerfil()
 }, [outroperfil])

const perfilNovo = () => {
setOutroPerfil(outroperfil+1)
}

const mudaraTela = () => {
  setTelaDoPerfil(!telaDoPerfil)
}

const curtirPerfil = (curtir) => {
  setCurtir(curtir)
  enviar()
  perfilNovo()

}

const enviar = () =>{
  const body = {
    id: perfil.id,
    choice: curtir
  }
  console.log(body)
  axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:mayra-carver/choose-person", body)
  .then((res) => {
console.log(res)
if (res.data.isMatch){
   window.alert("Novo Match")
}
})
.catch((err) => {
  console.log(err.response)
})
}

const limparTela = () =>{
 axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:mayra-carver/clear')
 .then((res) => {
   console.log(res)
 })
.catch((err) => {
  console.log(err.response)
})
}
  return (
    <div>
    <Container>
      <Header>
     <Title src= {Titulo}/>
     <button onClick={mudaraTela}>💜</button>
      </Header>
      <hr/>
      <div>
       { 
         telaDoPerfil ?
           <div>
            {
                carregando === "carregando"?
                  <Icone src= {Titulo3}/>
                  :
                  <div>
                  {
                  perfil.id?
                  <>
                   <ImgPerfil src={perfil.photo}/>
                <Card>  
                  <p>{perfil.name}, {perfil.age}</p>
                  <Bio>{perfil.bio}</Bio>
                </Card>  
                     <ContainerBotao> 
                     <button onClick={() => curtirPerfil(false)}>✖️</button>
                     <button onClick={() => curtirPerfil(true)}>💚</button>
                     </ContainerBotao>
                  </>
                  :
                <p>Nenhum perfil disponível</p>
              }
                </div>
            }   
            </div>
            :
            <Tela perfil={perfil}/>
       }
    </div>

</Container>
<BotaoContainer>
    <button onClick={limparTela}>Limpar swipes e matches</button>
    </BotaoContainer>
  </div>
      
)
}

export default Perfil;


