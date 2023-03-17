
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
 import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dsapage from './components/Dsapage';
import Array from './components/Array';
import About from './components/About';
import Footer from './components/Footer';
import Linked from './components/Linked';
import Stack from './components/Stack';
import Queue from './components/Queue';
function App() {
  
  return (
    
     <>
     
     < Navbar />
   
    <Routes>
          
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/dsa' element={<Dsapage/>}/>
      <Route exact path='/about' element={<About />}/>
      <Route exact path='/dsa/array' element={<Array/>}/>
   
      
          
       </Routes>  
       <Footer/>
       
      
      
      
      
       
       
   
      </>
  
  );
}

export default App;
