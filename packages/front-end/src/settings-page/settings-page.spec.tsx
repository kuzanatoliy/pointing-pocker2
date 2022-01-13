import { render, screen, cleanup } from '@testing-library/react';

import { SettingsPage } from './settings-page';

describe('settings-page', () => {
  const renderElement = () => render(<SettingsPage />);

  afterEach(cleanup);

  it('render container', () => {
    renderElement();
    expect(screen.getByText('settings page')).toBeDefined();
  });
});
