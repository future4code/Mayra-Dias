import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {BASE_URL} from '../constants/URL'


const Tela = () => {

    const[megaSena, setMegaSena] = useState([])
 

    
    const MegaSena = () => {
        axios.get(`${BASE_URL}/loterias`)
        .then((response) => {
            setMegaSena(response.data)
            console.log(response)
            })
        .catch((error) => {
            console.log(error.message)
            })
        
    }

    useEffect(() => {
        MegaSena()
    },[])

    
         
return(
    <div>
       Mega-Sena
    </div>

)}

export default Tela
