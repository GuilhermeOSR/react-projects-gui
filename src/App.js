import React from 'react';
import './App.css';
import Header from './Components/Header';
import Perfil from './Components/Perfil';
import Content from './Components/Content';
import Footer from './Components/Footer';




export default function App() {
  return (
    <div className="App">
      <Header />
      <Perfil />
      <Content />
      <Footer />
    </div>
  );
}

