import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/navbar';
import Home from './screens/Home/home'
import Footer from './components/Footer/footer'



function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      </header>

      <Footer />
    </div>
  );
}

export default App;
