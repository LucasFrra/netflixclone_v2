import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Video from './components/Video';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/video/:id" element={<Video />} />
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
