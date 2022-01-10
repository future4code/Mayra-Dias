import React from 'react'
import CardMedia from '@material-ui/core/CardMedia';
import { CardActionArea, Typography } from '@material-ui/core';
import { RecipeCardContainer } from '../Header/FeedCard/styled';


const PostCard = (props) =>{
    return(
        <RecipeCardContainer onClick={props.onClick}>
            <CardActionArea>
                <CardMedia
                 component={props.id}
                 alt={props.title}
                 title={props.title}
                 height={'150px'}
                 
                />
                <RecipeCardContainer>
                    <Typography align={'center'}>
                       {props.username.toUpperCase()}
                    </Typography>
                    <Typography align={'center'}>
                       {props.body.toUpperCase()}
                     </Typography>  
                </RecipeCardContainer>
            </CardActionArea>
        </RecipeCardContainer>
    )
}

export default PostCard;