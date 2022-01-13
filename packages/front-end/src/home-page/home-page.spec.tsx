import { render, screen, cleanup } from '@testing-library/react';

import { HomePage } from './home-page';

describe('game-page', () => {
  const renderElement = () => render(<HomePage />);

  afterEach(cleanup);

  it('render container', () => {
    renderElement();
    expect(screen.getByText('home page')).toBeDefined();
  });
});
