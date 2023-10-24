import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Landingpage from './Pages/Landingpage';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Landingpage' element={<Landingpage/>} />
      </Routes>
      <Footer/>
    </>
  )
}



 
export default App
