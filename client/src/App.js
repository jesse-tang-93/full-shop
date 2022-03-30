import React from 'react';
import './App.css';
import "./responsive.css";
// react-toastify 优美的toast
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/**
 * Route list
 */
import HomePage from './views/Home'
import NotFound from "./views/NotFound";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<HomePage/>} />
        {/* 404 */}
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
