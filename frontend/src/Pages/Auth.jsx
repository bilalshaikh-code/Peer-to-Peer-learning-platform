import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';
import ForgotPassword from '../components/Auth/ForgotPassword';

const Auth = () => {
  const location = useLocation();
  const [view, setView] = useState('signin');

  useEffect(() => {
    // Sync view with navigation state (from Navbar)
    if (location.state?.mode === 'signup') {
      setView('signup');
    } else {
      setView('signin');
    }
  }, [location.state]);

  return (
    <>
      {view === 'signin' && (
        <SignIn 
          onSwitch={() => setView('signup')} 
          onForgot={() => setView('forgot')} 
        />
      )}

      {view === 'signup' && (
        <SignUp 
          onSwitch={() => setView('signin')} 
        />
      )}

      {view === 'forgot' && (
        <ForgotPassword 
          onBack={() => setView('signin')} 
        />
      )}
    </>
  );
};

export default Auth;