import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import Alert from './Alert';
import Navbar from './Navbar';
import TextForm from './TextForm';
// import About from './About';
// import {BrowserRouter as Router,  Routes,  Route } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('light') //cheaks wheather darrk mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);

  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert("DArk mode has been activated", "success")

      // setInterval(() => {
      //   document.title = " texter dark mode now"
      // }, 1000);
      // setInterval(() => {
      //   document.title = " texter install now"
      // }, 2000);
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has been activated", "success");
      document.title = " texter "
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="Texter?>" aboutText="About" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-4">
          {/* <Routes> */}
            {/* <Route  exect path="/about" element={<About/>}/> */}
          {/* </Routes> */}
          {/* <Routes> */}
            {/* <Route  exect path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert}/>}/> */}
            <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert}/>
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
