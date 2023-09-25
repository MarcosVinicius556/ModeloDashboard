import { useState } from 'react';
import { MobileHeaderContainer, MobileHeaderContent, ToggleButton, HeaderLinks } from './Header.styled';
import { AiOutlineClose } from 'react-icons/ai';
import { FcHome, FcEngineering, FcSalesPerformance, FcPlus } from 'react-icons/fc';
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

function Header() {
    const[ fullMenu, setFullMenu ] = useState(true);

  function handleExpandMenu() {
    setFullMenu(!fullMenu);
  }

  return (
    <MobileHeaderContainer fullmenu={fullMenu ? 1 : 0}>
         <ToggleButton fullmenu={fullMenu ? 1 : 0} onClick={handleExpandMenu} >
           {fullMenu ?  (
                          <HiOutlineMenuAlt4 size={25} />
                        ) 
                      : (
                        <AiOutlineClose size={25} />
                      )}
         </ToggleButton> 

        
         <MobileHeaderContent fullmenu={fullMenu ? 1 : 0}>
             <h1>My Bills</h1>
             <img src="" alt="foto do usuário" />
             <HeaderLinks>
                 <a href="/dashboard">
                  <FcHome size={25} />
                  <span>Home</span>
                 </a>
                 <a href="/profile">
                  <FcEngineering size={25} />
                  <span>Configurações de perfil</span>
                 </a>
                 <a href="/show-bills">
                  <FcSalesPerformance />
                  <span>Visualizar gastos</span>
                 </a>
                 <a href="/add-bills">
                  <FcPlus size={25} />
                  <span>Cadastrar um novo gasto</span>
                 </a>
             </HeaderLinks>
         </MobileHeaderContent>
    </MobileHeaderContainer>
  )
}

export default Header