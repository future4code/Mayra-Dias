import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import {goToCadastro, goToFeed} from '../../routes/coordinator'
import {useHistory} from 'react-router-dom'
import {Container, InputContainer, ContainerBotao} from './styled'
import useFormulario from '../../hooks/formulario';
import { login } from '../../services/user';
import useProtectPage from '../../hooks/useProtectPage';

const LoginPage = () => {
const [form, onChange, clear] = useFormulario({email:"", password: ""})  
const history = useHistory()
useProtectPage()

const onSubmitForm = (event) =>{
event.preventDefault()
login(form, clear, history)
}
   
    return(
      <div>
        <Container>
            <h1>Página de Login</h1>
        </Container>
        <form onSubmit={onSubmitForm}>
        <InputContainer>
        <TextField
        name={"email"}
        value={form.email}
        onChange={onChange}
        label={"E-mail"}
        variant={"outlined"}
        margin={"normal"}
        required
        type={"email"}
        />
        <TextField
         name={"password"}
         value={form.password}
         onChange={onChange}
         label={"Senha"}
         variant={"outlined"}
         margin={"normal"}
         required
         type={"password"}
        />
        </InputContainer>
        <ContainerBotao>
        <Button 
        type={'submit'}
        variant={"text"}
        color={"secondary"}>Entrar
        </Button>
        <Button 
        type={'submit'}
        onClick={() => goToCadastro(history)}
        variant={"outlined"}
        color={"primary"}>Fazer Cadastro
        </Button>
       </ContainerBotao>
       </form>
      </div>
    )
}

export default LoginPage;