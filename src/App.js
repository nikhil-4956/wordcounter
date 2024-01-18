import { useState } from 'react';
import './App.css';
import About from './components/About';
import NewNavbar from './components/NewNavbar';
import Textfrom from './components/Textfrom';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";





function App() {
  const [mode, setmode]=useState('light')
  const [alert,setalert]=useState(null)
  const togglehandle=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743'
      showalrt("Dark mode has been enabled","success")
      // document.title='TextUtils- Darkmode'
      // setInterval(() => {
      //   document.title="TextUtils is amazing mode"
      // }, 2000);
      // setInterval(() => {
      //   document.title="install textutil"
      // }, 1500);
      
    }else{
      setmode('light');
      document.body.style.backgroundColor='white'
      showalrt("Light mode has been enabled","success")
      // document.title='TextUtils- Lightmode'
    }
  }
  const showalrt=(message, type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }
  
  return (
    <>
    <Router>
    <NewNavbar title="TxtUtils" abouttxt="AboutTxt" mode={mode} toggle={togglehandle} alrt={alert}/>
    <Alert alert={alert}/>
    {/* <NewNavbar abouttxt={2}/> */}
    <div className="container my-3" >
    
    {/* <About/> */}
    <Routes>
          <Route exact path="/about" 
          element={<About mode={mode}/>} 
          />
          <Route exact path="/" element={<Textfrom heading="Enter the text to analyze below" mode={mode} alrt={showalrt}/>} />
        </Routes>
    </div>
    </Router>
    
    </>
    
  );
}

export default App;
