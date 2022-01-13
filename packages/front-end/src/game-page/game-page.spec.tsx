import { render, screen, cleanup } from '@testing-library/react';

import { GamePage } from './game-page';

describe('game-page', () => {
  const renderElement = () => render(<GamePage />);

  afterEach(cleanup);

  it('render container', () => {
    renderElement();
    expect(screen.getByText('game page')).toBeDefined();
  });
});
