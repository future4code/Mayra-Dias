import React from 'react'
import {ErrorContainer, ErrorImg} from './style'
import img from '../../assets/img.jpg'


const ErrorPage = () => {
    return (
        <ErrorContainer>
      <ErrorImg src={img}/>      
        </ErrorContainer>
    )
}

export default ErrorPage;