// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode , setMode] =useState('light');  //whether dark mode is enabled or not
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#23272f';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <TextForm heading="Enter the text below: " mode={mode}/>
      </div>
    </>
    
  );
}

export default App;
