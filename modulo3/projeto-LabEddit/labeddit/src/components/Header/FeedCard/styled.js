import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export const RecipeCardContainer = styled(Card)`
 display:flex;
 flex-direction:row;
 flex-wrap:wrap;
 margin:30px;
 display:flex;
 flex-direction: column; 
`

export const RecipeCardContent = styled(CardContent)`
  postion:fixed !important;
  right: 20px:
  bottom: 20px;
  z-index:3;
`
