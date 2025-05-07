import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import  MainContent  from './components/MainContent';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Products from './components/Products';

import './App.css';
import Footer from './components/Footer';



function App() {
  return (
    <div className="app">
      <header className="App-header">
        <Navbar/>
      </header>

      <main className='main'>
        <Router>
          <Routes>
            <Route path='/' element={<Products/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </Router>
        </main>
      <footer><Footer/></footer>
    </div>
  );
}

export default App;
