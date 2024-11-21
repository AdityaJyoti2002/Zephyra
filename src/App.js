import './App.css';
import React,  { useEffect }from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Footer from "./components/Footer.js";
import Login from "./components/login.js";
import Nav from './components/nav.js';
import Price from './pages/price.js';
import Chatbot from './pages/chatbot.js';

function App() {
  const location = useLocation();

  const hideNavFooterRoutes = ["/Aichat"];
  useEffect(() => {
    const body = document.body;

    // Reset styles
    body.style.backgroundImage = '';
    body.style.backgroundColor = '#f4f4f4';

    // Apply custom styles for specific routes
    if (location.pathname === '/price' ) {
      body.style.backgroundColor = '#CEB6FF4F';

    }
    else if (location.pathname === '/login' ) {
      body.style.backgroundColor = '#CEB6FF4F'
    }else if (location.pathname === '/Aichat') {
      body.style.backgroundImage = "url('1.png')";
      body.style.backgroundSize = 'cover';
      body.style.backgroundRepeat = 'no-repeat';
      body.style.backgroundPosition = 'center';
    }
  }, [location]);


  return (
    <div className="App">
      {!hideNavFooterRoutes.includes(location.pathname) && <Nav />}
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/price" element={<Price />} />
        <Route path="/Aichat" element={<Chatbot />} />
      </Routes>
      
      {!hideNavFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
