import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import {goToCadastro} from '../../routes/coordinator'
import {useHistory} from 'react-router-dom'
import {Container, InputContainer, ContainerBotao} from './styled'
import useFormulario from '../../hooks/formulario';

const LoginPage = () => {

const [form, onChange, clear] = useFormulario({email:"", password: ""})  

  const onSubmitForm = () =>{

  }
    const history = useHistory()

    return(
      <div>
        <Container>
            <h1>Página de Login</h1>
        </Container>
        <InputContainer>
        <form onSubmit={onSubmitForm}>
        <TextField
         name={"email"}
         value={form.email}
         onChange={onChange}
         label={"E-mail"}
         fullWidth
        />
        <TextField
         name={"password"}
         value={form.password}
         onChange={onChange}
         label={"Senha"}
         fullWidth
        />
        </form>
        </InputContainer>
        <ContainerBotao>
        <Button 
        variant={"outlined" }
        color="primary">Entrar
        </Button>
        <Button 
        onClick={() => goToCadastro(history)}
        variant="outlined" 
        color="primary">Cadastrar
        </Button>
        </ContainerBotao>
      </div>
    )
}

export default LoginPage;