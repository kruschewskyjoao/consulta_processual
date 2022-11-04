import React, { Switch, Route, Redirect } from 'react-router-dom';
import PaginaInicial from './pages/PaginaInicial';
import PaginaResultado from './pages/PaginaResultado';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <div className="bg-slate-100">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Redirect to="/inicial" />
            )}
          />
          <Route exact path="/inicial" component={PaginaInicial} />
          <Route exact path="/resultadopesquisa" component={PaginaResultado} />
        </Switch>
      </div>
    </AppProvider>
  );
}

export default App;
