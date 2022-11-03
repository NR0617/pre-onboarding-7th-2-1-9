import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CarPage from './page/CarPage';
import CarDetailPage from './page/CarDetailPage';
import { GlobalStyle } from './styles/GlobalStyle';
import { CarProvider } from './context/carContext';
function App() {
  return (
    <CarProvider>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<CarPage />} />
        <Route path="/:id" element={<CarDetailPage />} />
      </Routes>
    </CarProvider>
  );
}

export default App;
