import './App.css';
import Header from './Components/Inc/Header';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Footer from './Components/Inc/Footer';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import { useEffect } from 'react';
import Contact from './Components/Pages/Contact';
import Notes from './Components/Pages/Notes';
import Semester from './Components/Pages/Semester';
import Login from './Components/Auth/Login';

function App() {

  return (
    <>

      <BrowserRouter >
        <Routes>
          <Route exact path="/header" element={<Header />} />
          <Route exact path="/footer" element={<Footer />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Notes" element={<Notes />} />
          <Route exact path="/Semester" element={<Semester />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
