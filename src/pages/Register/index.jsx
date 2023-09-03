import { FormContainer } from '../../components/Form/Form.style';
import LoadingButton from '../../components/LoadingButton/';
import { FormPage } from '../Login/FormRegister.style';

function Register() {

  return (
    <FormPage>
          <FormContainer width={500} height={500} onSubmit={ () => console.log('submit') }>
              <h1>MyBills</h1>
              <label>Nome de Usuário</label>
              <input type="text" placeholder="@User" />

              <label>Nome</label>
              <input type="text" placeholder="Digite seu nome"/>
              
              <label>Senha</label>
              <input type="password" placeholder="******"/>

              {/* <LoadingButton /> */}
              <input type="submit" value="Cadastrar" />
              <span>
              <a href='/'> Já possui cadastro? Faça login! </a>
              </span>
          </FormContainer>
        </FormPage>
  )
}

export default Register