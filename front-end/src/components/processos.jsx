import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/myContext';

function Processo() {
  const { processo } = useContext(MyContext);
  const history = useHistory();
  const voltarParaMainPage = () => {
    history.push('/inicial');
  };

  return (
    <div>
      { processo
        ? (
          <div className="w-full h-screen flex flex-col justify-between">
            <div className="w-full my-24">
              <section className="max-w-[1240] mx-auto">
                <h1 className="ml-10 text-slate-400 mb-2 text-sm">
                  {`Número do processo: ${processo.CNJ}`}
                </h1>
                <h1 className="text-3xl ml-10 mb-4">
                  {`${processo.autor} x ${processo.reu}`}
                </h1>
                <div className="flex">
                  <h1 className="text-slate-400 ml-12">
                    {`Tribunal de origem: ${processo.tribunalOrigem}`}
                  </h1>
                  <h1 className="text-slate-400 ml-10">
                    {`Data Inicial: ${processo.dataInicial}`}
                  </h1>
                </div>
                <section className="m-5 p-1 bg-white border-solid shadow-inner rounded-md">
                  <h1 className="font-bold ml-5 mr-10">Andamento processual</h1>
                  {
                  processo?.todasMovimentacoes.map((movi) => (
                    <section key={movi.dataMov} className="bg-slate-100 m-4 px-10 rounded-md">
                      <h1 className="font-semibold">{ movi.dataMov }</h1>
                      <h1 className="px-2">{ movi.descricao }</h1>
                    </section>
                  ))
                }
                </section>
              </section>
            </div>
          </div>
        )
        : voltarParaMainPage() }
    </div>
  );
}

export default Processo;
