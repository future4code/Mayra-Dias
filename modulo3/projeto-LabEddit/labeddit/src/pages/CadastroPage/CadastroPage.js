import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import {useHistory} from 'react-router-dom'
import {InputContainer, ContainerBotao, FormContainer} from '../LoginPage/styled'
import useFormulario from '../../hooks/formulario';
import { fazerLogin } from '../../services/user';

const Cadastro = () => {
const [form, onChange, clear] = useFormulario({name:"", email:"", password: ""})  
const history = useHistory() 

  const onSubmitForm = (event) =>{
  event.preventDefault()
  fazerLogin(form, clear, history)
  }
    
    return(
      <form onSubmit={onSubmitForm}>
        <FormContainer>
            <h1>Página de Cadastro</h1>
        <InputContainer>
        <TextField
         value={form.name}
         name={'name'}
         onChange={onChange}
         label={'Nome'}
         variant={'outlined'}
         required
         autoFocus
         margin={'normal'}
        />
        <TextField
         value={form.email}
         name={'email'}
         onChange={onChange}
         label={'E-mail'}
         variant={'outlined'}
         type={'email'}
         required
         margin={'normal'}
        />
        <TextField
         value={form.password}
         name={'password'}
         onChange={onChange}
         label={'Senha'}
         variant={'outlined'}
         type={'password'}
         required
         margin={'normal'}
        />     
        </InputContainer>
        <ContainerBotao>
        <Button 
        type={'submit'}
        onClick={""}
        variant={"outlined"}        
        color={"primary"}>Cadastrar
        </Button>
       </ContainerBotao>
       </FormContainer>
       </form>   
    )
}


export default Cadastro;