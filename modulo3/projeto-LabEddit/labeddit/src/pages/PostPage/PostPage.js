import React from 'react'
import useProtect from '../../hooks/useProtect';

const PostPage = () => {
    useProtect()
    return(
        <div>
            <h1>Página do Post</h1>
        </div>
    )
}

export default PostPage;