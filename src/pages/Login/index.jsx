import { FormContainer } from '../../components/Form/Form.style';
import { FormPage } from './FormRegister.style.jsx';

function Login() {

  return (
      <FormPage>
          <FormContainer width={500} height={500} onSubmit={ () => console.log('submit') }>
              <h1>MyBills</h1>
              <label>Nome de Usuário</label>
              <input type="text" placeholder="@User" />

              <label>Senha</label>
              <input type="password" placeholder="******"/>

              <input type="submit" value="Entrar" />
              <span>
              <a href='/'> Não possui um cadastro? Cadastre-se já! </a>
              </span>
          </FormContainer>
        </FormPage>
  )
}

export default Login