import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './components/Details.jsx';
import store from './Redux/store'; 
import { Provider } from 'react-redux';




createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
  <Route path="/" element={<App />} />
  <Route path="/movies/:imdbID" element={<Details />} />
</Routes>
    </BrowserRouter>
  </Provider>
);
