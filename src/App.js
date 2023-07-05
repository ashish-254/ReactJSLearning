//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
//import TextForm from './Components/TextForm';
import TextForm2 from './Components/TextForm2';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";




function App() {
  const [mode, changeMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      changeMode('dark')
      document.body.style.background = '#52585e'
    }
    else {
      changeMode('light')
      document.body.style.background = 'white'
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Ashish" about="about_section" mode={mode} toggleMode={toggleMode} />
        {/* <TextForm mode={mode}/> */}

        <Routes>
          <Route exact path="/" element={<TextForm2 mode={mode}/>} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
