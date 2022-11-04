/* eslint-disable */
import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import PaginaInicial from '../pages/PaginaInicial';
import AppProvider from '../context/AppProvider';

const navegarPaginaInicial = async (render) => {
  await render.history.push('/inicial');
}

describe('Testa página inicial', () => {
  it('rota da página', () => {
    const { history } = renderWithRouter(<App />);
    const { pathname } = history.location;
    expect(pathname).toBe('/inicial');
  });
  it('testa se na página tem input', async () => {
    renderWithRouter(<PaginaInicial />);
    const inputNumeros = screen.getByRole('textbox');
    expect(inputNumeros).toBeInTheDocument();
    expect(inputNumeros).toHaveAttribute('placeholder', 'Somente número');
  });
  it('testa se na página tem select', () => {
    renderWithRouter(<PaginaInicial />);
    const selectOptions = screen.getByRole('combobox');
    expect(selectOptions).toBeInTheDocument();
  });
  it('testa se na página tem Título', () => {
    renderWithRouter(<PaginaInicial />);
    const title = screen.getByText(/consulta processual/i);
    expect(title).toBeInTheDocument();
  });
  it('testa se na página tem botão de pesquisa', () => {
    renderWithRouter(<PaginaInicial />);
    const botaoPesquisa = screen.getByRole('button', {
      name: /pesquisar/i
    });
    expect(botaoPesquisa).toBeInTheDocument();
  });
  it('testa se o botão de pesquisa mostra mensagem caso de input falhar', async () => {
    renderWithRouter(<PaginaInicial />);
    const botaoPesquisa = screen.getByRole('button', {
      name: /pesquisar/i
    });
    userEvent.click(botaoPesquisa);
    const error = await waitFor(() => botaoPesquisa);
    expect(error).toBeInTheDocument();
  });
  it('testa se o cnj for válido vai redirecionar a página', async () => {
    const { history } = renderWithRouter(<AppProvider><PaginaInicial /></AppProvider>);
    const CNJ = '1008126-92.2015.8.26.0132';
    const inputNumeros = screen.getByRole('textbox');
    const botaoPesquisa = screen.getByRole('button', {
      name: /pesquisar/i
    });
    userEvent.type(inputNumeros, CNJ);
    userEvent.click(botaoPesquisa);
    await waitFor(() => {
      const { pathname } = history.location;
      expect(pathname).toBe('/resultadopesquisa');
    });
  });
});
