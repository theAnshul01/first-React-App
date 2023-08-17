// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

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
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#23272f';
      showAlert('Dark mode has been enabled' , 'success');
      // document.title = "TextUtils - Dark Mode"
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled' , 'success');
      // document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>    
      <BrowserRouter>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <div className="container">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter the text below: " mode={mode} showAlert={showAlert}  />} />
            <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode}/>}>
            </Route>
          </Routes>
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
