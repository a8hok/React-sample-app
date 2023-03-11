import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import React, {useEffect, useState} from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App(props) {

  const [data, setData] = useState([]);

  useEffect(function(){
    fetch('https://randomuser.me/api/?results=5').then(function(response){
      response.json().then(function(result){
        setData(result.results)
      })
    })
  },[]);

  return (
    <div className="App">
      <BrowserRouter> 
          <div className="App"> 
              <Link to="/">Contact </Link> 
              <Link to="/about">About</Link> 
          </div>
              <Routes>
                <Route path="/" element={<Contact />} /> 
                <Route path="/about" element={<About userData={data}/>} /> 
              </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
