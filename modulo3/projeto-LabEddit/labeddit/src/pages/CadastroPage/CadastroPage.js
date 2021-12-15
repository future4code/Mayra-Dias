import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';


const CadastroPage = () => {
    return(
        <div>
            <h1>Cadastro</h1>
            <TextField
          id="standard-password-input"
          label="Nome do usuário"
          type="nome"
          autoComplete="current-password"
        />
       <TextField
          id="standard-password-input"
          label="E-mail"
          type="E-mail"
          autoComplete="current-password"
        />
        <TextField
          id="standard-password-input"
          label="Senha"
          type="senha"
          autoComplete="current-password"
        />
        <Button variant="outlined" 
          color="primary">Cadastrar
        </Button>
        </div>
    )
}

export default CadastroPage;