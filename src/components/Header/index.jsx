import { useState } from 'react';
import { HeaderContainer, HeaderContent, ToggleButton } from './Header.styled';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FcHome, FcEngineering, FcSalesPerformance, FcPlus } from 'react-icons/fc';

function Header() {
    const[ fullMenu, setFullMenu ] = useState(true);

  function handleExpandMenu() {
    setFullMenu(!fullMenu);
  }

  return (
    <HeaderContainer fullmenu={fullMenu ? 1 : 0}>
         <ToggleButton fullmenu={fullMenu ? 1 : 0} onClick={handleExpandMenu} >
           {fullMenu ?  (
                          <AiOutlinePlus size={25} />
                        ) 
                      : (
                        <AiOutlineMinus size={25} />
                      )}
         </ToggleButton> 

        
         <HeaderContent fullmenu={fullMenu ? 1 : 0}>
             <h1>My Bills</h1>
             <img src="" alt="foto do usuário" />
             <span>
                 <a href="/dashboard">
                  <FcHome size={25} />
                  Home
                 </a>
                 <a href="/profile">
                  <FcEngineering size={25} />
                  Configurações de perfil
                 </a>
                 <a href="/show-bills">
                  <FcSalesPerformance />
                  Visualizar gastos
                 </a>
                 <a href="/add-bills">
                  <FcPlus size={25} />
                  Cadastrar um novo gasto
                 </a>
             </span>
         </HeaderContent>
    </HeaderContainer>
  )
}

export default Header