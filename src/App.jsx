// src/App.js
import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import EdBackground from './components/EdBackground';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div class='scope'>
      <Header/>
      <main>
        <Projects/>
        <EdBackground/>
        <Skills/>
        <Footer/>
      </main>
    </div>
  );
};

export default App;
