//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react';


function App() {
  const [mode,changeMode] = useState('light')

  const toggleMode =()=>{
    if(mode==='light'){
      changeMode('dark')
      // document.body.style.background = 'dark'
    }
    else{
      changeMode('light')
      // document.body.style.background = 'dark'
    }
  }
  
  return (
    <>
      <Navbar title="Ashish" about="about_section" mode={mode} toggleMode={toggleMode}/>
      <TextForm/>
    </>

  );
}

export default App;
