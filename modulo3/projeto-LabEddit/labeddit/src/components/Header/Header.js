import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {StyledContainer} from './styled'
import {goToFeed, goToLogin} from '../../routes/coordinator'
import {useHistory} from 'react-router-dom'

const Header = ({botaoDaBarra, setBotaoDaBarra}) => {
  const token = localStorage.getItem("token")
  const history = useHistory()
 

  const logout = () => {
    localStorage.removeItem("token")
  }

  const botaoAction = () =>{
    if(token){
      logout()
      setBotaoDaBarra("Login")
      goToLogin(history)
    }else{
      goToLogin(history)
    }
  }
  return (
      <AppBar position="static">
        <StyledContainer>
          <Button onClick={() => goToFeed(history)}color="inherit">LabeEddit</Button>
          <Button onClick={botaoAction}color="inherit">{botaoDaBarra}</Button>
        </StyledContainer>
      </AppBar>
  )
}

export default Header;