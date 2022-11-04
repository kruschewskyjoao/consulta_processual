import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
/* import InputMask from 'react-input-mask'; */
import MyContext from '../context/myContext';
import processoEspecifico from '../services/axios';

function Form() {
  const { inputProcesso, setInputProcesso, setProcesso } = useContext(MyContext);
  const [notFound, setNotFound] = useState(false);
  const history = useHistory();

  const handleChange = ({ target: { value } }) => {
    setInputProcesso(value);
  };

  const pesquisarButton = async () => {
    const proc = await processoEspecifico(inputProcesso);
    const NotFoundError = 404;
    if (proc.status === 200) {
      setProcesso(proc.data);
      setNotFound(false);
      history.push('/resultadopesquisa');
    }
    if (proc.status === NotFoundError) {
      setNotFound(true);
    }
  };

  useEffect(() => () => setNotFound(true), []);

  return (
    <div className="w-full text-center">
      <form className="mr-2">
        <div className="inline-block relative w-32">
          <select
            className="block
            w-24
            bg-white border
            border-gray-400
            hover:border-gray-500
            px-15
            h-12
            pr-1
            rounded
            shadow
            focus:outline-none
            focus:shadow-outline"
          >
            <option value="1">Tribunal</option>
          </select>
        </div>
        {/*         <InputMask
          mask="9999999-99.9999.9.99.9999"
          className="
          shadow-lg
          border-2
          border-slate-300
          rounded-md
          w-1/4
          h-12"
          type="text"
          placeholder="Somente número"
          name="numeroProcessoInput"
          value={inputProcesso}
          onChange={handleChange}
        /> */}
        <input
          className="
          shadow-lg
          border-2
          border-t-white
          border-l-white
          border-r-white
          border-slate-300
          rounded
          w-1/4
          h-12"
          type="text"
          placeholder="  Somente número"
          name="numeroProcessoInput"
          value={inputProcesso}
          onChange={handleChange}
        />
        <button
          className="bg-blue-500
        hover:bg-blue-700
        text-white
        font-bold
        h-12
        px-5
        rounded
        shadow-lg"
          type="button"
          onClick={pesquisarButton}
        >
          Pesquisar

        </button>
      </form>
      { notFound
      && (
      <p className="
        m-2 text-red-500"
      >
        Não encontrado nenhum processo, tente novamente.
      </p>
      )}
    </div>
  );
}

Form.defaultProps = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default Form;
