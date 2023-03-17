import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Notes from './Components/Pages/Notes';
import Semester from './Components/Pages/Semester';
import Login from './Components/Auth/Login';
import Header from './Components/Inc/Header';
import Footer from './Components/Inc/Footer';
import Editor from './Components/Pages/Editor';

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/header" element={<Header />} />
          <Route exact path="/footer" element={<Footer />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Notes" element={<Notes />} />
          <Route exact path="/Semester" element={<Semester />} />
          <Route exact path="/Editor" element={<Editor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
