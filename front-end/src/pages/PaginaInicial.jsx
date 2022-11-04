import React from 'react';
import Header from '../components/header';
import Form from '../components/form';
import ConteudoInicial from '../components/conteudoInicial';

function PaginaInicial() {
  return (
    <div className="bg-slate-50">
      <Header />
      <ConteudoInicial />
      <Form />
    </div>
  );
}

export default PaginaInicial;
