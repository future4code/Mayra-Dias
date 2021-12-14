import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import {goToCadastro} from '../../routes/coordinator'
import {useHistory} from 'react-router-dom'


const LoginPage = () => {
    const history = useHistory()

    return(
        <div>
            <h1>Página de Login</h1>
        <TextField
          id="standard-password-input"
          label="E-mail"
          type="E-mail"
          autoComplete="current-password"
        />
        <TextField
          id="standard-password-input"
          label="Senha"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="outlined" 
          color="primary">Entrar
        </Button>
        <Button onClick={() => goToCadastro(history)}
          variant="outlined" 
          color="primary">Cadastrar
        </Button>
        </div>
    )
}

export default LoginPage;