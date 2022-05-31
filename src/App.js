import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import RoutesPage from './routes';

function App() {
  return (
    <BrowserRouter>
      <RoutesPage />
    </BrowserRouter>
  );
}

export default App;
