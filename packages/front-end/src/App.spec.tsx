import { render, cleanup, screen } from '@testing-library/react';

import App from './App';

jest.mock('./router', () => ({
  Router: () => <div>App</div>,
}));

describe('app', () => {
  afterEach(cleanup);

  const renderElement = () => render(<App />);

  it('should render', () => {
    renderElement();
    expect(screen.getByText('App')).toBeDefined();
  });
});
