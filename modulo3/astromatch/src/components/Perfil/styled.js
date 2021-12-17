import styled from 'styled-components'

export const Container = styled.div`
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
border: 4px double #a850ff;


`

export const ContainerBotao = styled.div`
display: flex;
justify-content: space-evenly;
-webkit-box-align: center;
align-items: center;
padding: 397px 0px; 
top: 120px;
width: 100%;
position: fixed;
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
export const BotaoContainer = styled.div`
 position: fixed;
  right: 5px;
  bottom: 5px; 
`
export const Header = styled.div`
width: 100%;
height: 10%;
display:flex;
justify-content: space-around;
align-items: center;
>button{
width: 15%;
height: 50%;
&:hover{cursor: pointer}
border: 1px solid #c8a2c8;
border-radius: 50%;
}

`
export const Icone = styled.img`
width: 7%;
height:44%;

`
export const Title = styled.img`
width: 39%;
height: 86%;
`
export const ImgPerfil = styled.img`
width: 98%;
height: 438px;
position: relative;
border: 4px double #a850ff;

`
export const Card = styled.div`
width: 100%;
position: fixed;
top:361px;
>p{
  color: white;
  font-size: 35px;
  color:#990099; background:#fff0ff;

}

`
export const Bio = styled.div`
color: white;
font-size: 22px;
color:#990099; background:#fff0ff;

`