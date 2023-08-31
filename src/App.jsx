import React from 'react';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
