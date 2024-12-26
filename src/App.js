
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Textorm';
import Alert from './components/Alert';
import About from './components/About';

 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from "react-router-dom"


function App(){ 
   const [mode, setMode] = useState('light');
   const [alert, setAlert] = useState(null);

   const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
   }
 
   const toggleMode =() => {
        if(mode === 'light') {
          setMode('dark');
          document.body.style.backgroundColor = '#042743';
          showAlert("Dark Mode has been enabled", "success");
        }
         else {
          setMode('light');
          document.body.style.backgroundColor = 'white';
          showAlert("Light Mode has been enabled", "success");
         }
   }
  return(
    <>
    {/*<Navbar/>*/}
   <Router>
   <Navbar title="TextUtils" mode ={mode} toggleMode= {toggleMode}></Navbar>
   <Alert alert ={alert}/>
   <div className="container my-3">
    <Switch>
      <Route exact path="/about">
      <About />
      </Route>*
      <Route exact path="/">
      <TextForm heading="Enter the text to analyze" mode={mode} togglemode={toggleMode}/>
     
        </Route>
    </Switch>
    </div>
    </Router>
   
   
  </>
  );
}
export default App;
