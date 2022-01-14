import { memo } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Router, Header } from './components';

export const App = memo(() => (
  <BrowserRouter>
    <Header />
    <Router />
  </BrowserRouter>
));
