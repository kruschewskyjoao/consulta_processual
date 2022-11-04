import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/myContext';
import justica from '../images/justicaLogo.png';

function Header() {
  const { setInputProcesso } = useContext(MyContext);

  const clearInput = () => {
    setInputProcesso('');
  };

  return (
    <header className="w-screen h-[90px] z-10 bg-slate-300 drop-shadow-lg">
      <div className="px-10 flex justify-between items-center w-full h-full">
        <img width="60px" src={justica} alt="Direito e justiça" />
        <ul className="flex items-center mr-10">
          <li><Link to="/" onClick={clearInput}>Home</Link></li>
          <li>Login</li>
          <li>Cadastro</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
