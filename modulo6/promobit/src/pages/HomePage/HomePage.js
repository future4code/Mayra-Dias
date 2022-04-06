import React from 'react'
import { ScreenContainer, Container, ContainerBotao } from './style';
import Button from '@mui/material/Button';
import useRequestData from '../../hooks/useRequestData';
import {BASE_URL, API_KEY} from '../../constants/url'


const HomePage = () => {
// const movies = useRequestData([], `${BASE_URL}/now_playing/${API_KEY}/&language=po-BA&page=1`)
// console.log(movies)
    
    return (
        <div>
             <Container>
         <ScreenContainer>
 <h2>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h2>
 <h4>FILTRE POR:</h4>
        </ScreenContainer>
        <ContainerBotao>
       <Button variant="contained" color="secondary">Ação</Button> 
       <Button variant="contained" color="secondary">Animação</Button>
       <Button variant="contained" color="secondary">Comédia</Button>
       <Button variant="contained" color="secondary">Crime</Button>
       <Button variant="contained" color="secondary">Documentário</Button>
       <Button variant="contained" color="secondary">Drama</Button>
       <Button variant="contained" color="secondary">Família</Button>
       <Button variant="contained" color="secondary">Fantasia</Button>
       <Button variant="contained" color="secondary">História</Button>
       <Button variant="contained" color="secondary">Terror</Button>
       <Button variant="contained" color="secondary">Música</Button>
       <Button variant="contained" color="secondary">Mistério</Button>
       <Button variant="contained" color="secondary">Romance</Button>
       <Button variant="contained" color="secondary">Ficção científica</Button>
       <Button variant="contained" color="secondary">Cinema Tv</Button>
       <Button variant="contained" color="secondary">Thriller</Button>
       <Button variant="contained" color="secondary">Guerra</Button>
       <Button variant="contained" color="secondary">Faroeste</Button> 
       </ContainerBotao>
          </Container>

<movieCard
title={''}
image={''}
onClick={() => null }



/>

        </div>
       
    )
}

export default HomePage;