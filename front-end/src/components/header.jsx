import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MyContext from '../context/myContext';
import justica from '../images/justicaLogo.png';

function Header() {
  const { setInputProcesso } = useContext(MyContext);
  const [menu, setMenu] = useState(false);

  const clearInput = () => {
    setInputProcesso('');
  };

  const handleMenu = () => setMenu(!menu);

  return (
    <header className="w-screen h-[90px] z-10 bg-slate-300 drop-shadow-lg">
      <div className="px-10 flex justify-between items-center w-full h-full">
        <img width="60px" src={justica} alt="Direito e justiça" />
        <ul className="items-center mr-10 hidden md:flex pr">
          <li><Link to="/" onClick={clearInput}>Home</Link></li>
          <li>Login</li>
          <li>Cadastro</li>
        </ul>
        <button type="button" onClick={handleMenu} className="md:hidden">
          <div>
            {!menu ? <Bars4Icon className="w-9" /> : <XMarkIcon className="w-9" /> }
          </div>
        </button>
      </div>
      <ul className={!menu ? 'hidden' : 'absolute w-full px-8'}>
        <li className="border-b-2 bg-slate-300 w-full"><Link to="/" onClick={clearInput}>Home</Link></li>
        <li className="border-b-2 bg-slate-300 w-full">Login</li>
        <li className="border-b-2 bg-slate-300 w-full">Cadastro</li>
      </ul>
    </header>
  );
}

export default Header;
