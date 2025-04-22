import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Predictor from './pages/Predictor';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/predictor' element={<Predictor />} />
    </Routes>
  );
}

export default App;
