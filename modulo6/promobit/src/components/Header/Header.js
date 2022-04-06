import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider} from '@mui/material/styles';
import theme from '../../constants/theme';
import Button from '@mui/material/Button';
import {goToHome} from '../../routes/coordinator'
import {useHistory} from "react-router-dom"
import EditAttributesRoundedIcon from '@mui/icons-material/EditAttributesRounded';

function BarLabel(label) {
  const history = useHistory()
  return (
    <Toolbar>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
      <Button onClick={() => goToHome(history)} color="inherit">TMDB</Button>
        {label}
        <EditAttributesRoundedIcon/>
      </Typography>
    </Toolbar>
  );
}

const Header = () => {
  return (
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="primary" enableColorOnDark>
          {BarLabel('')}
        </AppBar>
      </ThemeProvider>
  );
}

export default Header;