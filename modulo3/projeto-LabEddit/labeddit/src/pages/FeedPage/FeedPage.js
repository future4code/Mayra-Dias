import React from 'react'
import useProtect from '../../hooks/useProtect';


const FeedPage = () => {
    useProtect()
    return(
        <div>
            <h1>Página de Feed</h1>
        </div>
    )
}

export default FeedPage;