import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header';
import Homepage from './pages/Homepage';

function App() {

  return (
    <>
       <Router>
            <div className="body">
                <Header/>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                </Routes>
            </div>
        

        </Router>
        
    </>
  )
}

export default App
