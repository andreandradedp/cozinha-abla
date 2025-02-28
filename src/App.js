import logo from './logo.svg';
import './App.css';
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Escolas from './components/Escolas';
import Salas from './components/Salas';
import Presencas from './components/Presencas';
import Cozinha from './components/Cozinha';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para a tela de login */}
        <Route path="/" element={<Login />} />

        {/* Rota para o dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Rota para cadastro/listagem de escolas */}
        <Route path="/escolas" element={<Escolas />} />

        {/* Rota para cadastro/listagem de salas */}
        <Route path="/salas" element={<Salas />} />

        {/* Rota para registro de presenças */}
        <Route path="/presencas" element={<Presencas />} />

        {/* Rota para a tela da cozinha */}
        <Route path="/cozinha" element={<Cozinha />} />
      </Routes>
    </Router>
  );
}

export default App;