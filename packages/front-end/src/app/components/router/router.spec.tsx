import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Router, PATHS } from './router';

jest.mock('../../../game-page', () => ({
  GamePage: () => <div>GamePage</div>,
}));

jest.mock('../../../home-page', () => ({
  HomePage: () => <div>HomePage</div>,
}));

jest.mock('../../../settings-page', () => ({
  SettingsPage: () => <div>SettingsPage</div>,
}));

describe('router', () => {
  const renderElement = ({ route = PATHS.HOME } = {}) => {
    window.history.pushState({}, 'test', route);
    return render(<Router />, { wrapper: BrowserRouter });
  };

  it.each`
    route             | text
    ${PATHS.HOME}     | ${'HomePage'}
    ${PATHS.GAME}     | ${'GamePage'}
    ${PATHS.SETTINGS} | ${'SettingsPage'}
    ${PATHS.ERROR}    | ${'error'}
  `('render container', ({ route, text }) => {
    renderElement({ route });
    expect(screen.getByText(text)).toBeDefined();
  });
});
