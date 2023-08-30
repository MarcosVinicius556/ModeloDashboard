import BaseInput from "../BaseInput";
import SubmitButton from "../SubmitButton";
import { FormContainer } from './Form.style';

export default function Form() {
    return(
    <FormContainer onSubmit={() => console.log('submit')}>
        <h1>MyBills</h1>
        <input type="email" placeHolder="email@email.com" 
        />
        <input type="text" placeHolder="Digite seu nome"
        />
        <input type="password" placeHolder="******"
        />
        <input type="submit" text="Cadastrar" />
        <span>
        <a href='/'> Já possui cadastro? Faça login! </a>
        </span>
    </FormContainer>
    );
}