import Home from './views/Home';
import About from './views/About';
import './assets/styles/styles.css';
import Resume from './views/Resume';
import Projects from './views/Projects';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading ? <Loader /> : (
        <div className='App' id={isLoading ? 'no-scroll' : 'scroll'}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/project' element={<Projects />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;