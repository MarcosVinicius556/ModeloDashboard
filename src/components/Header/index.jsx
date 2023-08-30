import { useState } from 'react';
import './header.css';

function Header() {
    const[ fullMenu, setFullMenu ] = useState(false);

  function handleExpandMenu() {
    setFullMenu(!fullMenu);
  }

  return (
    <header className={fullMenu ? `expand-container` : ''}>
        {/* {fullMenu 
        ? (<AiOutlineMenuFold size={45} onClick={handleExpandMenu} className='change-menu-btn'/>) 
        : (<AiOutlineMenuUnfold size={45} onClick={handleExpandMenu} className='change-menu-btn'/>) 
        } */}

        <button onClick={handleExpandMenu} className='change-menu-btn' >{fullMenu ? 'Close' : 'Open' }</button> 

        
        <div className={`header-container ${fullMenu ? 'show-container' : ''}`}>
            <h1>My Bills</h1>
            <img src="" alt="foto do usuário" />
            <div className="header-options">
                <a href="/dashboard">Home</a>
                <a href="/profile">Configurações de perfil</a>
                <a href="/show-bills">Visualizar gastos</a>
                <a href="/add-bills">Cadastrar um novo gasto</a>
            </div>
        </div>
    </header>
  )
}

export default Header