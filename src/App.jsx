import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import Addmovie from './components/Addmovie';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TopRated from './components/TopRated';

const App = () => {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/add-movie" element={<Addmovie />} />
          <Route path="/top-rated" element={<TopRated />} />
        </Routes>
        <Footer />
      </div>
    
  );
}

export default App;
