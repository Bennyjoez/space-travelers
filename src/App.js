import React from 'react';
import './index.css';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Mission from './components/Missions/Mission';
import Rocket from './components/Rockets/Rocket';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Rocket />} />
          <Route path="/Mission" element={<Mission />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
