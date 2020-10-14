import React from 'react';
import logo from '../images/logo-mesto.svg';

function Header (){
    return(<header className="header">
    <img className="header__logo" src={logo} alt="Mesto лого"/>
    <hr className="header__line"/>
</header>);
}

export default Header;
