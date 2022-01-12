import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<div>home</div>} />
      <Route path='settings' element={'settings'} />
      <Route path='game' element={'game'} />
      <Route path='*' element={'error'} />
    </Routes>
  );
}

export default App;
