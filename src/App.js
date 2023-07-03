//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import TextForm2 from './Components/TextForm2';
import React,{useState} from 'react';


function App() {
  const [mode,changeMode] = useState('light')

  const toggleMode =()=>{
    if(mode==='light'){
      changeMode('dark')
      document.body.style.background = '#52585e'
    }
    else{
      changeMode('light')
      document.body.style.background = 'white'
    }
  }
  
  return (
    <>
      <Navbar title="Ashish" about="about_section" mode={mode} toggleMode={toggleMode}/>
      {/* <TextForm mode={mode}/> */}
      <TextForm2 mode={mode}/>
    </>

  );
}

export default App;
