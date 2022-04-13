import React from 'react'
import { CardActionArea } from '@mui/material';
import { CardActions } from '@mui/material';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';




const movieCard = (props) =>{
    
    return(
      <CardActionArea>
        <CardActions>
          <CardContent
            component={'img'}
            alt={props.title}
            heigth={'150px'}
            image={props.image}
            title={props.title}
          />
          <Typography align={'center'}>
              {props.title}
          </Typography>
        </CardActions>
      </CardActionArea>


    )
}

export default movieCard;