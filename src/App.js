// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode , setMode] =useState('light');  //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert({
      msg : message , 
      type : type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1700);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#23272f';
      showAlert('Dark mode has been enabled' , 'success');
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled' , 'success');
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <TextForm heading="Enter the text below: " mode={mode} showAlert={showAlert}/>
      </div>
    </>
    
  );
}

export default App;
