import axios from 'axios'
import {useEffect, useState} from 'react'
import {CardPerfil} from '../Tela/styled'

function Tela(){

    const [matches, setMatches] = useState([])
 
    const Matches = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:mayra-carver/matches")
        .then((res) => {
            setMatches(res.data.matches)
            console.log(res)
           
        })
        .catch((err) => {
            console.log(err.response)
        })
    }
 
  useEffect(() => {
      Matches()
  },[])
    
return(
    <div>
       {
           matches.map((match) => {
               return(
                   <CardPerfil>
                       <img src={match.photo}/>
                       <p>{match.name}</p>
                       
                   </CardPerfil>
               )
           })
       }
    </div>
)

}   
export default Tela;