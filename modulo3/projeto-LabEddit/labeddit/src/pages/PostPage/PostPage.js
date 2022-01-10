import React from 'react'
import useProtect from '../../hooks/useProtect';
import PostCard from '../../components/PostCard/PostCard'
import { RecipeCardContainer } from '../../components/Header/FeedCard/styled'
import { BASE_URL } from '../../constants/url';
import useRequest from '../../hooks/useRequest';

const PostPage = () => {
    const feed = useRequest([], `${BASE_URL}/posts`)
    console.log(feed)
    useProtect()

    const cardsFeed = feed.map((feed) =>{ 
        return (
        <PostCard
        username={feed.username}
        key={feed.id}
        title={feed.title}
        body={feed.body}
        />
    )
})

    return(
        <RecipeCardContainer>
        <div>
            <h1>Página de Post</h1>
            {cardsFeed}
        </div>
        </RecipeCardContainer>
      
    )
}

export default PostPage;