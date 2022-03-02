import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Countries from './pages/Countries/Countries'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Divider } from '@chakra-ui/react';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Divider />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/countries' element={<Countries />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
