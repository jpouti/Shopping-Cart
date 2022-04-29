import React from 'react';
import { fireEvent, getByText, render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import NavHeader from './components/NavHeader';

test('Renders NavHeader links', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
    );
  const linkHome = screen.getByText('Home');
  const linkShop = screen.getByText('Shop');
  expect(linkHome).toBeInTheDocument();
  expect(linkShop).toBeInTheDocument();
});

test('Clicking Nav links, navigates the correct page', () => {
  const history = createMemoryHistory();
  history.push = jest.fn()
  render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
    );

    fireEvent.click(screen.getByText(/Shop/i));
    expect(history.push).toHaveBeenCalledWith(
      {
      hash: '',
      pathname: '/Shop',
      search: '',
      },
      undefined,
    );
});
