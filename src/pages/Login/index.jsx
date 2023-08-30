import { useState } from 'react';
import BaseInput from '../../components/BaseInput';
import SubmitButton from '../../components/SubmitButton';
import LoadingButton from '../../components/LoadingButton';
import './login.css';

function Login() {

  const[ userName, setUsername ] = useState('');
  const[ pass, setPass ] = useState('');
  const[ loading, setLoading ] = useState(false);

  return (
    <div className='login-page'>
        <form className="login-card" onSubmit={ () => console.log('submit') }>
            <h1>MyBills</h1>
            <BaseInput 
              labelText="Nome" 
              type="text" 
              placeHolder="Digite seu nome" 
              changeState={setUsername}
            />
            <BaseInput 
              labelText="Senha"
              type="password" 
              placeHolder="*******" 
              changeState={setPass}
            />
            {
              loading ?
              (
                <LoadingButton />    
              ) : (
                <SubmitButton text="Entrar" />
              )
            }
            
            <span>
            <a href='/register'> Ainda não possui cadastro? se cadastre aqui</a>
            </span>
        </form>
    </div>
  )
}

export default Login