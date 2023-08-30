import BaseInput from "../../components/BaseInput";
import SubmitButton from "../../components/SubmitButton";

function Register() {

  return (
    <div className='login-page'>
        <form className="login-card" onSubmit={() => console.log('submit')}>
            <h1>MyBills</h1>
            <BaseInput 
              labelText="Email" 
              type="email" 
              placeHolder="email@email.com" 
            />
            <BaseInput 
              labelText="Nome" 
              type="text" 
              placeHolder="Digite seu nome"
            />
            <BaseInput 
              labelText="Senha" 
              type="password" 
              placeHolder="******"
            />
            <SubmitButton text="Cadastrar" />
            <span>
            <a href='/'> Já possui cadastro? Faça login! </a>
            </span>
        </form>
    </div>
  )
}

export default Register