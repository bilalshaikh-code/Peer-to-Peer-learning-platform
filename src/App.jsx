import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import AuthPage from './components/AuthPage';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* LANDING PAGE ROUTE */}
          <Route path="/" element={
            <main>
              <Hero />
              <Features />
              <Courses />
              <HowItWorks/>
            </main>
          } />

          {/* AUTH PAGE ROUTE */}
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;