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
            <div className="w-full my-20 max-w-[1240px] m-auto">
              <section className="max-w-[1240] mx-auto">
                <h1 className="ml-10 text-slate-400 mb-2 md:text-lg w-52 sm:w-auto">
                  {`Número do processo: ${processo.CNJ}`}
                </h1>
                <h1 className="text-2xl w-52 ml-10 mb-4 flex md:text-4xl sm:w-auto">
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
                <section className="m-4 p-2 bg-white border-solid shadow-inner rounded-md">
                  <h1 className="font-bold ml-5 mr-10 mt-2">Andamento processual</h1>
                  {
                  processo?.todasMovimentacoes.map((movi) => (
                    <section key={movi.dataMov} className="bg-slate-100 m-4 px-6 rounded-md py-3">
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
