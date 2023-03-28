import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import NavBar from './components/Navbar';
import Main from './components/Main';
import Calendar from './components/Calendar';
import Contact from './components/Contact'
import Duets from './components/Duets'
import Music from './components/Music'

import './App.css'

function App() {
  return ( 
    <div className="main">
      
        <div className='backgroundImg'>
          {/* <Header/> */}
           
            <Router>               
              <NavBar/>
              <Header/>
              <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/message" element={<Contact/>}/>
                <Route path="/calendar" element={<Calendar/>}/>
                <Route path="/duets" element={<Duets/>}/>
                <Route path="/music" element={<Music/>}/>
              </Routes>
            </Router>
        </div>
    </div>
  )
  }

export default App;