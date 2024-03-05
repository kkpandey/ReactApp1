import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import Auth from './Auth.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
            <Routes>
                <Route path="/user" element={<App />} />
        <Route path="/" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
