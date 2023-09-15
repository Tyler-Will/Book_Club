
import './App.css';
import Navbar from './Mainstay Components/Navbar';
import Home from './Home';
import Bookshelf from './Bookshelf';
import Admin from './Admin';
//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
//useEffect is needed to prevent fetch request from running more than once. See below.
import {useEffect} from 'react';

function App() {

  return (
      <BrowserRouter>
      <Navbar />
        <Routes>
      <Route path ="/" element={<Home />} />
      <Route path ="/Bookshelf" element={<Bookshelf />} />
      <Route path = "/Admin" element={<Admin/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
