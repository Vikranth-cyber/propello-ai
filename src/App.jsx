import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Definition from './components/Definition';
import Services from './components/Services';
import Working from './components/Working';
import Demo from './components/Demo';
import Benefits from './components/Benefits';
import Registered from './components/Registered';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        'home', 'definition', 'services', 'working',
        'demo', 'benefits', 'registered', 'contact'
      ];
      let current = 'home';

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax scroll for stars
  useEffect(() => {
    const handleParallaxScroll = () => {
      document.querySelectorAll('.parallax-layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateY(${window.scrollY * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleParallaxScroll);
    return () => window.removeEventListener('scroll', handleParallaxScroll);
  }, []);

  const handleLogin = (credentials) => {
    setUser({ name: credentials.username });
    setShowAuthModal(false);
  };

  const handleRegister = (credentials) => {
    setUser({ name: credentials.username });
    setShowAuthModal(false);
  };

  const handleGuest = () => {
    setUser({ name: 'Guest' });
    setShowAuthModal(false);
  };

  return (
    <Router>
      <div className="app">
        {/* Animated Stars */}
        <div className="stars-container">
          {Array.from({ length: 200 }).map((_, i) => {
            const size = Math.random() > 0.9 ? 4 : Math.random() > 0.7 ? 3 : 2;
            return (
              <div
                key={i}
                className="stars"
                style={{
                  top: `${Math.random() * 100}vh`,
                  left: `${Math.random() * 100}vw`,
                  animationDelay: `${Math.random() * 90}s, ${Math.random() * 2.5}s`,
                  animationDuration: `${60 + Math.random() * 30}s, ${1 + Math.random() * 2}s`,
                  opacity: 0.7 + Math.random() * 0.3,
                  width: `${size}px`,
                  height: `${size}px`,
                  filter: 'drop-shadow(0 0 4px white)',
                }}
              />
            );
          })}
        </div>

        {/* Navbar */}
        <Navbar
          user={user}
          scrolled={scrolled}
          activeSection={activeSection}
          onAuthClick={() => setShowAuthModal(true)}
          onLogout={() => setUser(null)}
        />

        {/* Routes */}
        <Routes>
          <Route path="/" element={
            <main>
              <Hero user={user} />
              <Definition />
              <Services />
              <Working />
              <Demo />
              <Benefits />
              <Registered />
              <Contact />
            </main>
          } />
        </Routes>

        <Footer />

        {/* Auth Modal */}
        <AnimatePresence>
          {showAuthModal && (
            <motion.div
              className="auth-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(0, 0, 0, 0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                backdropFilter: 'blur(10px)',
              }}
            >
              <motion.div
                className="modal-content"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                style={{
                  width: '400px',
                  maxWidth: '90%',
                  background: 'rgba(20, 20, 20, 0.95)',
                  borderRadius: '24px',
                  padding: '2rem',
                  color: 'white',
                  boxShadow: '0 0 40px rgba(138, 109, 255, 0.4)',
                  border: '1px solid rgba(138, 109, 255, 0.3)',
                  position: 'relative',
                }}
              >
                <button
                  className="close-btn"
                  onClick={() => setShowAuthModal(false)}
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '20px',
                    background: 'transparent',
                    border: 'none',
                    fontSize: '28px',
                    color: 'var(--primary)',
                    cursor: 'pointer',
                  }}
                >
                  ×
                </button>
                
                {authMode === 'login' ? (
                  <div className="auth-form">
                    <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Sign In</h3>
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      handleLogin({
                        username: e.target.username.value,
                        password: e.target.password.value,
                      });
                    }}>
                      <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        required
                        style={{
                          width: '100%',
                          padding: '12px',
                          margin: '10px 0',
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: 'white',
                          border: '1px solid rgba(138, 109, 255, 0.3)',
                        }}
                      />
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        style={{
                          width: '100%',
                          padding: '12px',
                          margin: '10px 0',
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: 'white',
                          border: '1px solid rgba(138, 109, 255, 0.3)',
                        }}
                      />
                      <button
                        type="submit"
                        style={{
                          background: 'var(--gradient-primary)',
                          color: 'black',
                          padding: '12px',
                          width: '100%',
                          borderRadius: '12px',
                          marginTop: '10px',
                          fontWeight: 'bold',
                          border: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        Sign In
                      </button>
                    </form>
                    <p style={{ marginTop: '15px', textAlign: 'center' }}>
                      Don't have an account?{' '}
                      <button
                        onClick={() => setAuthMode('register')}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--primary)',
                          cursor: 'pointer',
                          textDecoration: 'underline',
                        }}
                      >
                        Create one
                      </button>
                    </p>
                    <button
                      onClick={handleGuest}
                      style={{
                        background: 'transparent',
                        border: '1px solid var(--primary)',
                        color: 'var(--primary)',
                        padding: '10px',
                        width: '100%',
                        borderRadius: '12px',
                        marginTop: '10px',
                        cursor: 'pointer',
                      }}
                    >
                      Continue as Guest
                    </button>
                  </div>
                ) : (
                  <div className="auth-form">
                    <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Create Account</h3>
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      handleRegister({
                        username: e.target.username.value,
                        email: e.target.email.value,
                        password: e.target.password.value,
                      });
                    }}>
                      <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        required
                        style={{
                          width: '100%',
                          padding: '12px',
                          margin: '10px 0',
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: 'white',
                          border: '1px solid rgba(138, 109, 255, 0.3)',
                        }}
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        style={{
                          width: '100%',
                          padding: '12px',
                          margin: '10px 0',
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: 'white',
                          border: '1px solid rgba(138, 109, 255, 0.3)',
                        }}
                      />
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        style={{
                          width: '100%',
                          padding: '12px',
                          margin: '10px 0',
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: 'white',
                          border: '1px solid rgba(138, 109, 255, 0.3)',
                        }}
                      />
                      <button
                        type="submit"
                        style={{
                          background: 'var(--gradient-primary)',
                          color: 'black',
                          padding: '12px',
                          width: '100%',
                          borderRadius: '12px',
                          marginTop: '10px',
                          fontWeight: 'bold',
                          border: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        Register
                      </button>
                    </form>
                    <p style={{ marginTop: '15px', textAlign: 'center' }}>
                      Already have an account?{' '}
                      <button
                        onClick={() => setAuthMode('login')}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--primary)',
                          cursor: 'pointer',
                          textDecoration: 'underline',
                        }}
                      >
                        Sign In
                      </button>
                    </p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;