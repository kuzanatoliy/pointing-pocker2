import { VFC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { GamePage } from './game-page';
import { HomePage } from './home-page';
import { SettingsPage } from './settings-page';

export enum PATHS {
  HOME = '/',
  SETTINGS = 'settings',
  GAME = 'game',
  ERROR = '*',
}

export const Router: VFC = () => (
  <Routes>
    <Route path={PATHS.HOME} element={<HomePage />} />
    <Route path={PATHS.SETTINGS} element={<SettingsPage />} />
    <Route path={PATHS.GAME} element={<GamePage />} />
    <Route path={PATHS.ERROR} element={'error'} />
  </Routes>
);
