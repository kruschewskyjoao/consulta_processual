import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';

function AppProvider({ children }) {
  const [inputProcesso, setInputProcesso] = useState('');
  const [processo, setProcesso] = useState();

  const contextValue = useMemo(() => ({
    setInputProcesso,
    inputProcesso,
    processo,
    setProcesso,
  }), [inputProcesso, processo]);

  return (
    <MyContext.Provider value={contextValue}>
      { children }
    </MyContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
