import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import AboutPage from './components/About';
import SolutionPage from './components/Solution';
import ContactPage from './components/Contact';
import SigninPage from './components/signin';
import WelcomePage from './components/WelcomePage';
import { EnergyTradingEscrow } from './contracts/energy';
import Trade from './components/Trade';


function App() {

  const handleLogin = (username: string, password: string): void => {
  };

  const handleSignUp = (username: string, password: string): void => {
    
  };

  const handlePublish = (energyAmount: number, price: number): void => {
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solution" element={<SolutionPage />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/signin"
            element={<SigninPage onLogin={handleLogin} onSignUp={handleSignUp} />}
          />
          <Route path="/welcome/:username" element={<WelcomePage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;