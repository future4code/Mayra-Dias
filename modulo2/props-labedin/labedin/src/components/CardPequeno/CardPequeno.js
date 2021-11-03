import React from 'react';
import './CardPequeno.css'


function PequenoCard(props) {
    return (
        <div className="bigcontainer-do-email">
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </div>
    )
}

export default PequenoCard;