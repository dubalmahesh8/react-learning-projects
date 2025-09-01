// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [alert, showAlert] = useState(null);
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const toggleMode = () =>{
    console.log("I am toggle mode :: "+mode);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled");
    }
  }

  setTimeout(() => {
    showAlert(null);
  }, 2000);

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
        <TextForm heading="Enter a text below to analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;
