import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {StyledContainer} from './styled'
import {goToLogin} from '../../routes/coordinator'
import {useHistory} from 'react-router-dom'

const Header = () => {
    const history = useHistory()
  return (
      <AppBar position="static">
        <StyledContainer>
          <Button onClick={() => (history)}color="inherit">LabeEddit</Button>
          <Button onClick={() => goToLogin(history)}color="inherit">Login</Button>
        </StyledContainer>
      </AppBar>
  )
}

export default Header;