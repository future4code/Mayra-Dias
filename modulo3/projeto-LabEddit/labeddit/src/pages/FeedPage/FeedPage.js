import React from 'react'
import FeedCard from '../../components/Header/FeedCard/FeedCard';
import { RecipeCardContainer } from '../../components/Header/FeedCard/styled';
import { BASE_URL } from '../../constants/url';
import useProtect from '../../hooks/useProtect';
import useRequest from '../../hooks/useRequest';


const FeedPage = () => {
    useProtect()
    const feed = useRequest([], `${BASE_URL}/posts`)
    console.log(feed)

const cardsFeed = feed.map((feed) =>{
    return (
        <FeedCard
        username={feed.username}
        key={feed.id}
        title={feed.title}
        body={feed.body}
        />
    )
})
    return(
        <RecipeCardContainer>
            <h1>Página de Feed</h1>
            {cardsFeed}
        </RecipeCardContainer>
       
    )
}

export default FeedPage;