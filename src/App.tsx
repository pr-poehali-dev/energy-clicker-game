import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import GamePage from './pages/GamePage';
import NotFound from './pages/NotFound';
import { FooterNav } from './components/ui/footer-nav';
import './App.css';

function App() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Routes>
        <Route path="/" element={<GamePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterNav />
    </div>
  );
}

export default App;
