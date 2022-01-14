import { render, cleanup, screen } from '@testing-library/react';

import { App } from './app';

jest.mock('./components', () => ({
  Header: () => <div>Header</div>,
  Router: () => <div>Router</div>,
}));

describe('app', () => {
  afterEach(cleanup);

  const renderElement = () => render(<App />);

  it('should render', () => {
    renderElement();
    expect(screen.getByText('Header')).toBeDefined();
    expect(screen.getByText('Router')).toBeDefined();
  });
});
